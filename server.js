import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import https from 'https';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Stable backend active' });
});

const SYSTEM_INSTRUCTION = `
You are the Halftone AI Assistant. Provide CRISP, SHORT information about Halftone Systems in bullet points.
- Founder: Nagaraj Adireddy.
- Services: IT Consulting, Staffing, Product Development, Custom Software.
`;

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log('Request received for /api/chat');

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        console.log(`User message: ${message}`);

        const payload = JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: SYSTEM_INSTRUCTION },
                { role: "user", content: message }
            ]
        });

        const options = {
            hostname: 'api.groq.com',
            port: 443,
            path: '/openai/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        console.log('Sending https.request to Groq API...');

        const groqReq = https.request(options, (groqRes) => {
            let data = '';
            groqRes.on('data', (chunk) => { data += chunk; });
            groqRes.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (groqRes.statusCode !== 200) {
                        console.error('Groq API Error details:', JSON.stringify(result));
                        return res.status(groqRes.statusCode).json({ error: 'Groq API Error', details: result });
                    }
                    const text = result.choices?.[0]?.message?.content || "No response received.";
                    res.json({ reply: text });
                } catch (e) {
                    res.status(500).json({ error: 'JSON Parse Error', details: data });
                }
            });
        });

        groqReq.on('error', (e) => {
            console.error('HTTPS REQUEST ERROR:', e);
            res.status(500).json({ error: 'Failed to reach Groq', details: e.message });
        });

        groqReq.write(payload);
        groqReq.end();

    } catch (error) {
        console.error('SERVER ERROR:', error);
        res.status(500).json({
            error: 'Server encountered an error',
            details: error.message
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Stable server running at http://localhost:${port}`);
});
