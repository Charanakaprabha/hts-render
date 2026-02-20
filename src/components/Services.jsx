import React from 'react';
import { Monitor, Cloud, Shield, Database, Layout, Code } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div className="service-card">
        <div className="service-icon">
            <Icon size={32} />
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{desc}</p>
        <a href="#" className="service-link">Learn More &rarr;</a>
    </div>
);

export const Services = () => {
    const services = [
        { icon: Monitor, title: "Digital Experience", desc: "Creating seamless, engaging user journeys across all digital touchpoints." },
        { icon: Cloud, title: "Cloud Transformation", desc: "Scalable cloud solutions that drive agility and reduce operational costs." },
        { icon: Shield, title: "Cybersecurity", desc: "Robust security frameworks to protect your assets and build trust." },
        { icon: Database, title: "Data & AI", desc: "Harnessing the power of data to drive intelligent decision-making." },
        { icon: Layout, title: "Application Modernization", desc: "Revitalizing legacy systems for the modern digital era." },
        { icon: Code, title: "Custom Software", desc: "Tailored software solutions engineered for your specific business needs." },
    ];

    return (
        <section className="services section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Capabilities</h2>
                    <p className="section-subtitle">Comprehensive technology services to accelerate your business.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => <ServiceCard key={i} {...s} />)}
                </div>
            </div>
        </section>
    );
};
