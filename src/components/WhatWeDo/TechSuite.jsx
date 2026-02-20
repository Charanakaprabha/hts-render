import React, { useState } from 'react';
import { Building2, Bot, Link, Cloud, Shield, Smartphone, BarChart3, Settings, Globe, Megaphone, ChevronDown, ChevronUp } from 'lucide-react';
import './TechSuite.css';

const TechItem = ({ icon: Icon, title, description, features }) => {
    const [isOpen, setIsOpen] = useState(false);

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    return (
        <div id={slug} className={`tech-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="tech-header">
                <div className="tech-icon-wrapper">
                    <Icon size={28} />
                </div>
                <div className="tech-title-wrapper">
                    <h3 className="tech-title">{title}</h3>
                    <p className="tech-desc">{description}</p>
                </div>
                <div className="tech-toggle">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>
            <div className="tech-details">
                <ul className="tech-features">
                    {features.map((feature, idx) => (
                        <li key={idx} className="tech-feature-item">
                            <span className="check-icon">✔</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const TechSuite = () => {
    const technologies = [
        {
            icon: Building2,
            title: "Enterprise Business Applications",
            description: "Unify operations and scale confidently.",
            features: [
                "SAP-Powered ERP Systems — Streamline manufacturing & supply chains",
                "Custom Enterprise Software — Bespoke applications built to scale",
                "Legacy System Modernization — Breathe new life into infrastructure",
                "Proven ROI: Average 300% return on investment"
            ]
        },
        {
            icon: Bot,
            title: "AI & Machine Learning",
            description: "Smarter decisions, predicted outcomes.",
            features: [
                "Predictive Analytics — Forecast trends with advanced algorithms",
                "Computer Vision — Automate quality control and visual inspection",
                "Natural Language Processing — Intelligent chatbots & doc analysis",
                "Personalization Engines — Deliver hyper-customized experiences",
                "Process Automation — Boost efficiency by up to 400%"
            ]
        },
        {
            icon: Link,
            title: "Blockchain Solutions",
            description: "Trust, transparency, and tamper-proof security.",
            features: [
                "Supply Chain Verification — End-to-end product authenticity",
                "Smart Contracts — Automate agreements & eliminate intermediaries",
                "Immutable Transaction Records — Bulletproof security",
                "Cryptocurrency Integration — Secure digital payment ecosystems"
            ]
        },
        {
            icon: Cloud,
            title: "Cloud Technologies",
            description: "Scale effortlessly, reduce costs dramatically.",
            features: [
                "Multi-Cloud Strategy — Optimize costs across AWS, Azure, Google Cloud",
                "Cloud Migration Services — Seamless, zero-disruption transition",
                "IaaS / PaaS / SaaS Solutions — Enterprise-grade infrastructure",
                "DevOps & CI/CD Pipelines — Accelerate development cycles",
                "Cost Savings: Reduce IT infrastructure costs by up to 60%"
            ]
        },
        {
            icon: Shield,
            title: "Cybersecurity Solutions",
            description: "Zero-compromise security for your digital assets.",
            features: [
                "Advanced Threat Detection — AI-powered 24/7 monitoring",
                "Zero-Trust Architecture — Secure access control",
                "Compliance Management — GDPR, HIPAA, SOC 2 readiness",
                "Incident Response Planning — Rapid structured recovery",
                "Military-level security protocols"
            ]
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Beautifully crafted, high-performance mobile solutions.",
            features: [
                "Customer-Centric Retail Apps — Boost sales with AI experiences",
                "Healthcare & Telemedicine Platforms — Enable remote care",
                "Field Service Management — Optimize workforce productivity",
                "Cross-Platform Development — Flawless on iOS and Android"
            ]
        },
        {
            icon: BarChart3,
            title: "Data Science & Analytics",
            description: "Transform raw data into strategic assets.",
            features: [
                "Business Intelligence Dashboards — Real-time KPI monitoring",
                "Predictive Risk Models — Forward-looking risk analysis",
                "Customer Behavior Analytics — Anticipate expectations",
                "Performance Optimization — Data-driven operational improvements"
            ]
        },
        {
            icon: Settings,
            title: "Automation & Intelligent RPA",
            description: "Eliminate inefficiency, reduce errors.",
            features: [
                "Robotic Process Automation — Automate repetitive processes",
                "Intelligent Workflow Management — Smart routing",
                "Quality Assurance Automation — Ensure consistent output",
                "Cost Reduction: Lower operational costs by up to 50%"
            ]
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "Powerful, conversion-optimized digital experiences.",
            features: [
                "Progressive Web Applications — Fast, offline-capable experiences",
                "E-Commerce Platforms — Drive online revenue",
                "API Development & Integration — Enable frictionless data flow",
                "Performance Optimization — Lightning-fast websites"
            ]
        },
        {
            icon: Megaphone,
            title: "Digital Marketing & Growth",
            description: "Amplify reach and accelerate growth.",
            features: [
                "Data-Driven Strategies — ROI-focused campaigns",
                "Marketing Automation — Nurture leads with intelligent workflows",
                "SEO & Content Optimization — Dominate search rankings",
                "Social Media Management — Build authentic brand presence",
                "Growth Acceleration: Average 250% increase in engagement"
            ]
        }
    ];

    return (
        <section id="tech-suite" className="tech-suite section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title section-title-dark">OUR TECHNOLOGY SUITE</h2>
                    <p className="section-subtitle">From enterprise platforms to cutting-edge AI — we cover every dimension of your digital journey.</p>
                </div>
                <div className="tech-grid">
                    {technologies.map((tech, i) => <TechItem key={i} {...tech} />)}
                </div>
            </div>
        </section>
    );
};
