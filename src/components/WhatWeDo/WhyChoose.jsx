import React from 'react';
import { Rocket, Factory, Zap, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import './WhyChoose.css';

const ReasonCard = ({ icon: Icon, title, desc }) => (
    <div className="reason-card">
        <div className="reason-icon-wrapper">
            <Icon size={32} className="reason-icon" />
        </div>
        <h3 className="reason-title">{title}</h3>
        <p className="reason-desc">{desc}</p>
    </div>
);

export const WhyChoose = () => {
    const reasons = [
        {
            icon: Rocket,
            title: "Innovation-First Approach",
            desc: "We stay ahead of emerging technology trends, giving you a decisive competitive edge."
        },
        {
            icon: Factory,
            title: "Deep Industry Expertise",
            desc: "Domain knowledge across manufacturing, healthcare, finance, retail, logistics, and more."
        },
        {
            icon: Zap,
            title: "Rapid Deployment",
            desc: "Accelerated time-to-market with proven agile development methodologies."
        },
        {
            icon: ShieldCheck,
            title: "Enterprise-Grade Security",
            desc: "Military-level cybersecurity protecting your data, operations, and reputation."
        },
        {
            icon: TrendingUp,
            title: "Measurable ROI",
            desc: "Every solution is designed to deliver quantifiable, verifiable business value."
        },
        {
            icon: Globe,
            title: "Global Vision, Local Expertise",
            desc: "International best practices perfectly tailored to your specific environment."
        }
    ];

    return (
        <section className="why-choose section-padding bg-dark-alt">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title section-title-dark">WHY CHOOSE HALFTONE SYSTEMS?</h2>
                    <p className="section-subtitle">Six reasons why industry leaders trust us to power their digital transformation.</p>
                </div>
                <div className="reasons-grid">
                    {reasons.map((r, i) => <ReasonCard key={i} {...r} />)}
                </div>
            </div>
        </section>
    );
};
