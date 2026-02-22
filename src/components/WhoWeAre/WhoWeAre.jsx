import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import './WhoWeAre.css';
import founderImage from '../../assets/nagraj.webp';

// --- Three.js Background Component ---
const WireframeGlobe = () => {
    const sphereRef = useRef();

    useFrame(({ clock, mouse }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.02;

            // Gentle response to mouse movement
            sphereRef.current.position.x = mouse.x * 2;
            sphereRef.current.position.y = mouse.y * 2;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1.5, 32, 32]} scale={2.5}>
            <meshBasicMaterial color="#00D4FF" wireframe={true} transparent opacity={0.15} />
        </Sphere>
    );
};

export const WhoWeAre = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const floatVariants = {
        float: {
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const metrics = [
        { value: '19+', label: 'YEARS OF EXPERTISE' },
        { value: '4', label: 'COUNTRIES SERVED' },
        { value: '30+', label: 'TECHNOLOGY PARTNERS' },
        { value: '14+', label: 'INDUSTRY VERTICALS' },
    ];

    const pillars = [
        { id: '01', icon: '🏥', title: 'Healthcare AI & Smart Ambulance Systems', desc: 'AI-powered emergency response platforms and intelligent patient care applications that reduce response times and improve care outcomes through real-time data intelligence.' },
        { id: '02', icon: '⚡', title: 'Sustainable Mobility & EV Fleet Management', desc: 'Electric fleet management platforms with real-time tracking, route optimisation, and predictive maintenance — driving the future of sustainable transportation.' },
        { id: '03', icon: '🏭', title: 'Smart Manufacturing & Industry 4.0', desc: 'Intelligent automation, predictive analytics, and IoT-enabled tools that revolutionise operational efficiency and drive manufacturing excellence.' },
        { id: '04', icon: '🧠', title: 'Enterprise AI & ERP Transformation', desc: 'Modernising legacy systems with SAP, cloud technologies, and AI-driven analytics — empowering enterprises with agile, scalable, future-ready infrastructure.' },
        { id: '05', icon: '🚀', title: 'AI Solutions for MSMEs', desc: 'Democratising advanced technology through low-code/no-code AI applications — enabling small and medium businesses to compete and scale at unprecedented speeds.' },
        { id: '06', icon: '🛒', title: 'E-commerce & Digital Platforms', desc: 'Custom AI-powered commerce solutions that elevate user experiences, optimise conversions, and accelerate growth for B2B and B2C businesses globally.' },
    ];



    return (
        <section id="who-we-are" className="who-we-are-section">

            {/* Three.js Background */}
            <div className="who-we-are-bg">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <WireframeGlobe />
                </Canvas>
            </div>

            <motion.div
                className="who-we-are-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >

                {/* Core Narrative */}
                <motion.div className="wa-core-narrative" variants={itemVariants}>
                    <h2 className="wa-headline">We Don't Just Build Technology.<br /><span className="wa-accent">We Build Futures.</span></h2>
                    <p className="wa-description">
                        Halftone Systems is a global technology powerhouse — engineering transformative digital solutions that turn ambitious visions into measurable competitive advantages.
                    </p>
                </motion.div>

                {/* Metric Cards */}
                <motion.div className="wa-metrics-grid" variants={itemVariants}>
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            className="wa-metric-card wa-glass-card"
                            variants={floatVariants}
                            animate="float"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.5)" }}
                        >
                            <h3 className="wa-metric-value">{metric.value}</h3>
                            <p className="wa-metric-label">{metric.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div className="wa-divider" variants={itemVariants}></motion.div>

                {/* Founder Focus */}
                <motion.div className="wa-founder-section" variants={itemVariants}>
                    <h4 className="wa-section-title">─── OUR HISTORY</h4>
                    <h3 className="wa-section-subtitle">Born from a Vision to Transform the World</h3>

                    <div className="wa-founder-content">
                        <div className="wa-founder-text">
                            <p>Halftone Systems was founded by Nagaraj Adireddy — a technology visionary with a Master's in Computer Science from SRH University Heidelberg, Germany, and advanced business systems expertise from the University of Stralsund, Germany.</p>
                            <p>Over a remarkable 19-year international career spanning Germany, USA, UK, and India, Nagaraj became a trusted strategic advisor to Fortune 500 enterprises and high-growth businesses across the globe — before channelling that expertise into Halftone Systems.</p>
                            <p>Today, the company stands as a crossroads of deep technical excellence and strategic business intelligence, delivering breakthrough solutions across 14+ industry verticals worldwide.</p>
                        </div>

                        <div className="wa-founder-quote-box wa-glass-card">
                            <div className="wa-founder-image-container">
                                <img src={founderImage} alt="Nagaraj Adireddy" className="wa-founder-image" />
                            </div>
                            <h5 className="wa-founder-name">NAGARAJ ADIREDDY</h5>
                            <p className="wa-founder-title">FOUNDER & MANAGING DIRECTOR · HALFTONE SYSTEMS</p>
                            <blockquote className="wa-quote">
                                "Technology is not just about digital adoption; it's about business transformation. Every solution we architect must drive measurable value, enhance competitive positioning, and create sustainable growth for our clients."
                            </blockquote>
                        </div>
                    </div>

                    <div className="wa-industries-list">
                        <span className="wa-list-label">Cross-Industry Expertise:</span>
                        <p className="wa-list-items">Financial Services · Healthcare & Pharma · Retail & E-commerce · Manufacturing · Energy & Utilities · Oil & Gas · Logistics · GovTech · Agritech · Education · Food Import/Export · Drones · Facility Management</p>
                    </div>
                </motion.div>

                {/* Journey Timeline */}
                <motion.div className="wa-journey-section" variants={itemVariants}>
                    <h4 className="wa-section-title">─── OUR JOURNEY</h4>
                    <h3 className="wa-section-subtitle">A Timeline of Excellence</h3>

                    <div className="wa-timeline">
                        <div className="wa-timeline-item">
                            <div className="wa-timeline-dot"></div>
                            <div className="wa-timeline-content">
                                <h5>GENESIS</h5>
                                <p>Nagaraj begins his international technology journey in Germany, building expertise in enterprise systems, cloud architecture, and strategic consulting across European Fortune 500 clients.</p>
                            </div>
                        </div>
                        <div className="wa-timeline-item">
                            <div className="wa-timeline-dot"></div>
                            <div className="wa-timeline-content">
                                <h5>EXPANSION</h5>
                                <p>Extends practice to USA and UK, advising global enterprises on digital transformation, SAP modernisation, and AI-driven analytics strategies.</p>
                            </div>
                        </div>
                        <div className="wa-timeline-item">
                            <div className="wa-timeline-dot"></div>
                            <div className="wa-timeline-content">
                                <h5>HALFTONE FOUNDED</h5>
                                <p>With 19 years of international mastery, Nagaraj launches Halftone Systems — architecting a firm built to deliver Fortune 500-grade technology to organisations of every scale.</p>
                            </div>
                        </div>
                        <div className="wa-timeline-item">
                            <div className="wa-timeline-dot"></div>
                            <div className="wa-timeline-content">
                                <h5>TODAY</h5>
                                <p>Halftone Systems powers organisations across Healthcare, Energy, Pharmaceuticals, Education, Logistics, Retail and beyond — on four continents.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Vision & Pillars */}
                <motion.div className="wa-vision-section" variants={itemVariants}>
                    <h4 className="wa-section-title">─── OUR VISION</h4>
                    <h3 className="wa-section-subtitle">Six Pillars of Innovation</h3>
                    <p className="wa-vision-desc">Halftone Systems delivers breakthrough solutions across six core practice areas — each engineered to give clients an enduring competitive advantage.</p>

                    <div className="wa-pillars-grid">
                        {pillars.map((pillar) => (
                            <motion.div
                                key={pillar.id}
                                className="wa-pillar-card"
                                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 212, 255, 0.2)" }}
                            >
                                <div className="wa-pillar-header">
                                    <span className="wa-pillar-id">{pillar.id}</span>
                                    <span className="wa-pillar-icon">{pillar.icon}</span>
                                </div>
                                <h5 className="wa-pillar-title">{pillar.title}</h5>
                                <p className="wa-pillar-desc">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>



            </motion.div>
        </section>
    );
};
