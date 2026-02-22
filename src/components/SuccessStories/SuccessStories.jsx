import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart,
    Smartphone,
    Ambulance,
    GraduationCap,
    TestTube2,
    Network,
    Building2,
    Cpu,
    Wheat,
    Zap,
    Landmark,
    Globe2
} from 'lucide-react';
import './SuccessStories.css';

export const SuccessStories = () => {
    // 1. Container Stagger Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // 2. Individual Item Fade-in-up Animation
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                mass: 1
            }
        }
    };



    const stories = [
        {
            icon: <ShoppingCart size={28} className="ss-icon" />,
            title: "DICK'S SPORTING GOODS",
            desc: "Delivered high-performance technology services for Dick's Sporting Goods — supporting digital commerce operations, system reliability, and technology excellence at enterprise scale.",
            tag: "Retail & E-commerce",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
        },
        {
            icon: <Smartphone size={28} className="ss-icon" />,
            title: "OHM",
            desc: "End-to-end delivery of iOS and Android mobile applications paired with a comprehensive Fleet Management system — giving OHM real-time visibility and operational control.",
            tag: "Mobility & Fleet Tech",
            colSpan: "col-span-1"
        },
        {
            icon: <Ambulance size={28} className="ss-icon" />,
            title: "BHARAT CARE AMBULANCE SERVICE",
            desc: "Architected and deployed a full iOS and Android mobile application with integrated fleet management — dramatically improving emergency response coordination.",
            tag: "Healthcare & Emergency Tech",
            colSpan: "col-span-1"
        },
        {
            icon: <GraduationCap size={28} className="ss-icon" />,
            title: "CREIGHTON UNIVERSITY",
            desc: "Delivered strategic technology services to Creighton University — supporting their academic digital ecosystem, systems integration, and institutional technology goals.",
            tag: "Education & EdTech",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
        },
        {
            icon: <TestTube2 size={28} className="ss-icon" />,
            title: "VIRCHOW BIOTECH PRIVATE LIMITED",
            desc: "Provided specialised technology services to Virchow Biotech — enabling them to optimise operations, enhance compliance workflows, and accelerate digital transformation.",
            tag: "Healthcare & Pharma",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
        },
        {
            icon: <Network size={28} className="ss-icon" />,
            title: "RAGHAVA LIFE SCIENCES",
            desc: "Designed and deployed a robust enterprise networking architecture — ensuring secure, high-availability connectivity across critical laboratory environments.",
            tag: "Life Sciences & Networking",
            colSpan: "col-span-1"
        },
        {
            icon: <Building2 size={28} className="ss-icon" />,
            title: "TFMC",
            desc: "Delivered comprehensive technology services to the Telangana Facility Management Council — supporting their digital operations and governance technology needs.",
            tag: "Government & Public Sector",
            colSpan: "col-span-1"
        },
        {
            icon: <Cpu size={28} className="ss-icon" />,
            title: "PROMEA®",
            desc: "Provided end-to-end technology services to Promea — helping them build scalable digital infrastructure and accelerate their path from vision to high-growth operation.",
            tag: "Technology Services",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
        },
        {
            icon: <Wheat size={28} className="ss-icon" />,
            title: "MITHUNA FOODS",
            desc: "Supported Mithuna Foods with technology services enabling smarter supply chain management, digital commerce capabilities, and operational efficiency.",
            tag: "Food & Agri Trade",
            colSpan: "col-span-1"
        },
        {
            icon: <Zap size={28} className="ss-icon" />,
            title: "WPP ENERGY",
            desc: "Partnered with WPP Energy on their technology journey — supporting their mission to deliver innovative, sustainable energy production solutions at a global scale.",
            tag: "Energy & Utilities",
            colSpan: "col-span-1"
        },
        {
            icon: <Landmark size={28} className="ss-icon" />,
            title: "ROYAL ORBIT HOLDING GROUP",
            desc: "Delivered technology services to Royal Orbit Holding Group — enabling cross-portfolio digital integration and strategic technology advisory.",
            tag: "Finance & Holdings",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
        },
        {
            icon: <Globe2 size={28} className="ss-icon" />,
            title: "PX NORDIC · DARIAN · CHEMIE-TECH",
            desc: "Extended our global footprint to Nordic, Middle Eastern, and European markets — providing specialised technology services across IT, trading, and specialty chemicals.",
            tag: "Global Technology Services",
            colSpan: "col-span-1 md:col-span-3 lg:col-span-3"
        },
    ];

    return (
        <section id="success-stories" className="success-stories-section">
            <div className="ss-container">
                <div className="ss-header-block">
                    <h4 className="ss-section-title">─── SUCCESS STORIES</h4>
                    <h3 className="ss-section-subtitle">Trusted by Industry Leaders Worldwide</h3>
                    <p className="ss-vision-desc">From Silicon Valley sports giants to Indian government councils, from European biotech firms to American universities — our success stories span industries, continents, and ambitions.</p>
                </div>

                <motion.div
                    className="ss-bento-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            className={`ss-bento-item ${story.colSpan}`}
                            variants={itemVariants}
                        >
                            <motion.div
                                className="ss-glass-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="ss-card-header">
                                    <div className="ss-icon-wrapper">
                                        {story.icon}
                                    </div>
                                    <h5 className="ss-card-title">{story.title}</h5>
                                </div>

                                <p className="ss-card-desc">{story.desc}</p>

                                <div className="ss-card-footer">
                                    <div className="ss-glowing-pill">
                                        <div className="ss-pill-dot"></div>
                                        {story.tag}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
