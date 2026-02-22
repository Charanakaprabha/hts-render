import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Car, HeartPulse, Pill, Microscope, Stethoscope,
    ShoppingBag, Plane, GraduationCap, Briefcase, Clapperboard,
    CheckCircle2, TrendingUp, ChevronRight
} from 'lucide-react';
import './Industries.css';

export const Industries = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const scrollContainerRef = useRef(null);

    const industries = [
        {
            icon: Car,
            number: "01",
            name: "AUTOMOTIVE",
            tagline: "Driving the Future of Mobility & Manufacturing",
            description: "The automotive industry is undergoing its most dramatic transformation in a century — from connected vehicles and electric powertrains to smart factories and autonomous systems. Halftone Systems engineers the digital backbone that powers this revolution.",
            capabilities: [
                "Connected Vehicle & IoT Platforms",
                "Smart Manufacturing & Industry 4.0",
                "Predictive Maintenance Systems",
                "Supply Chain Digitization & ERP",
                "Dealer Management & CRM Solutions",
                "Autonomous Systems Integration"
            ],
            outcomes: [
                "Up to 40% reduction in downtime",
                "30% faster production cycles",
                "Real-time supply chain visibility",
                "Enhanced customer experience",
                "Accelerated EV transition readiness"
            ]
        },
        {
            icon: HeartPulse,
            number: "02",
            name: "HEALTHCARE",
            tagline: "Transforming Patient Care Through Intelligent Technology",
            description: "Healthcare demands precision, compliance, and compassion — all at scale. Halftone Systems delivers secure, HIPAA-compliant digital platforms that empower clinicians, streamline operations, and place patients at the center of every experience.",
            capabilities: [
                "Electronic Health Records (EHR/EMR)",
                "Telemedicine & Remote Care Platforms",
                "Clinical Workflow Automation",
                "AI-Powered Diagnostics & Analytics",
                "Hospital Management Systems",
                "Patient Engagement & Mobile Apps"
            ],
            outcomes: [
                "60% improvement in care coordination",
                "45% reduction in administrative burden",
                "Real-time patient monitoring",
                "Full HIPAA & regulatory compliance",
                "Higher patient satisfaction scores"
            ]
        },
        {
            icon: Pill,
            number: "03",
            name: "PHARMACEUTICAL",
            tagline: "Accelerating Drug Discovery & Regulatory Excellence",
            description: "In an industry where speed and compliance save lives, Halftone Systems delivers intelligent technology that accelerates drug development pipelines, ensures airtight regulatory adherence, and transforms how pharmaceutical companies operate globally.",
            capabilities: [
                "Clinical Trial Management Systems",
                "Regulatory Compliance & Reporting",
                "Drug Discovery AI & Analytics",
                "Serialization & Track-and-Trace",
                "Pharmacovigilance Platforms",
                "Laboratory Information Management"
            ],
            outcomes: [
                "Faster clinical trial execution",
                "Reduced compliance risk & penalties",
                "End-to-end drug traceability",
                "Accelerated time-to-market",
                "Data-driven R&D decision-making"
            ]
        },
        {
            icon: Microscope,
            number: "04",
            name: "LIFE SCIENCES",
            tagline: "Powering Breakthroughs from Lab to Market",
            description: "Life sciences companies operate at the intersection of innovation and regulation. Halftone Systems provides the digital infrastructure — from genomics data management to bioinformatics platforms — enabling scientists to focus on advancing human health.",
            capabilities: [
                "Genomics & Bioinformatics Platforms",
                "Research Data Management Systems",
                "Quality Management Systems (QMS)",
                "Digital Lab Automation & LIMS",
                "Regulatory Submission Portals",
                "AI-Powered Research Analytics"
            ],
            outcomes: [
                "Accelerated research timelines",
                "Full GxP regulatory compliance",
                "Improved research reproducibility",
                "Seamless lab-to-market pipeline",
                "Real-time scientific collaboration"
            ]
        },
        {
            icon: Stethoscope,
            number: "05",
            name: "MEDICAL",
            tagline: "Engineering Precision Solutions for Medical Excellence",
            description: "From medical device manufacturers to specialty clinics, Halftone Systems builds digital ecosystems that ensure precision, safety, and seamless patient outcomes across the full medical technology continuum.",
            capabilities: [
                "Medical Device Software (FDA/CE Certified)",
                "Medical Imaging & Diagnostics AI",
                "Medical Coding & Billing Automation",
                "Interoperability & HL7/FHIR Integration",
                "Chronic Disease Management Platforms",
                "Digital Health Compliance Solutions"
            ],
            outcomes: [
                "99%+ medical coding accuracy",
                "Reduced billing errors & claim denials",
                "Seamless system interoperability",
                "Faster insurance reimbursement",
                "Improved diagnostic precision"
            ]
        },
        {
            icon: ShoppingBag,
            number: "06",
            name: "RETAIL",
            tagline: "Reimagining Shopping Experiences for the Digital Age",
            description: "Today's retail winners are built on intelligent digital foundations — omnichannel excellence, AI-driven personalization, and frictionless customer journeys. Halftone Systems equips retailers with the technology to compete, captivate, and grow.",
            capabilities: [
                "Omnichannel Commerce Platforms",
                "AI-Powered Personalization Engines",
                "Inventory & Supply Chain Management",
                "Point of Sale (POS) & Payment Systems",
                "Customer Loyalty & CRM Programs",
                "Retail Analytics & Business Intelligence"
            ],
            outcomes: [
                "40% boost in conversion rates",
                "60% improvement in customer retention",
                "Real-time inventory optimization",
                "Higher average order values",
                "Seamless online-to-offline experience"
            ]
        },
        {
            icon: Plane,
            number: "07",
            name: "TRAVEL & TOURISM",
            tagline: "Crafting Seamless Journeys in the Experience Economy",
            description: "Travel is the world's most experience-driven industry. Halftone Systems helps airlines, hotels, tour operators, and travel agencies harness AI, mobile, and analytics to create unforgettable journeys that inspire lasting loyalty.",
            capabilities: [
                "Travel Booking & Reservation Platforms",
                "AI-Powered Trip Personalization",
                "Revenue Management Systems",
                "Hotel & Property Management Systems",
                "Loyalty Program Platforms",
                "Real-Time Travel Analytics & Insights"
            ],
            outcomes: [
                "Higher booking conversion rates",
                "Improved customer loyalty & NPS",
                "Dynamic revenue optimization",
                "Reduced operational overhead",
                "Seamless multi-channel booking"
            ]
        },
        {
            icon: GraduationCap,
            number: "08",
            name: "EDUCATION & RESEARCH",
            tagline: "Empowering Learners & Advancing Knowledge at Scale",
            description: "Education is the foundation of all progress. Halftone Systems delivers intelligent learning platforms, research management tools, and institutional technology that empowers educators, engages learners, and drives academic excellence worldwide.",
            capabilities: [
                "Learning Management Systems (LMS)",
                "AI-Powered Adaptive Learning Engines",
                "Student Information & ERP Systems",
                "Research Collaboration Platforms",
                "Virtual Classrooms & EdTech Apps",
                "Assessment & Credentialing Solutions"
            ],
            outcomes: [
                "Improved learner engagement & retention",
                "Personalized AI-driven learning paths",
                "Streamlined institutional administration",
                "Enhanced research collaboration",
                "Data-driven academic performance insights"
            ]
        },
        {
            icon: Briefcase,
            number: "09",
            name: "SERVICES INDUSTRY",
            tagline: "Elevating Service Delivery Through Smart Automation",
            description: "Whether professional services, financial services, or managed services — Halftone Systems equips service organizations with the digital tools to work smarter, deliver faster, and build lasting client relationships that drive sustained growth.",
            capabilities: [
                "Professional Services Automation (PSA)",
                "CRM & Client Relationship Platforms",
                "Intelligent Workflow Automation (RPA)",
                "Financial Management & ERP Systems",
                "Knowledge Management Platforms",
                "Service Analytics & Reporting Dashboards"
            ],
            outcomes: [
                "50% reduction in manual processing",
                "Improved client satisfaction & retention",
                "Faster service delivery cycles",
                "Real-time business performance insights",
                "Scalable growth without added headcount"
            ]
        },
        {
            icon: Clapperboard,
            number: "10",
            name: "MEDIA & ENTERTAINMENT",
            tagline: "Powering Content, Engagement & Digital Experience",
            description: "The media and entertainment landscape demands relentless innovation — from streaming platforms and content monetization to audience analytics and immersive experiences. Halftone Systems engineers the digital infrastructure that keeps creators and audiences connected.",
            capabilities: [
                "OTT & Streaming Platform Development",
                "Content Management & Distribution Systems",
                "AI-Powered Content Recommendation Engines",
                "Audience Analytics & Monetization Tools",
                "Digital Rights Management (DRM)",
                "Immersive AR/VR Experience Platforms"
            ],
            outcomes: [
                "Higher content engagement & watch time",
                "Personalized viewer experiences at scale",
                "New digital revenue streams unlocked",
                "Reduced content delivery costs",
                "Stronger audience loyalty & retention"
            ]
        }
    ];

    return (
        <section id="industries" className="industries section-padding">
            <div className="container" style={{ padding: 0 }}>
                <div className="section-header text-center">
                    <p className="section-subtitle-small">
                        — Sector-Specific Expertise. Enterprise-Grade Results. —
                    </p>
                    <h2 className="section-title section-title-dark">INDUSTRIES WE SERVE</h2>
                    <p className="section-intro">
                        Halftone Systems brings deep domain knowledge and cutting-edge technology to every industry we serve. We don't offer generic solutions — we engineer precision-built digital transformations tailored to your sector's unique challenges, regulations, and growth opportunities.
                    </p>
                </div>

                <div className="industries-scroll-area" ref={scrollContainerRef}>
                    <div className="industries-sticky-layout">
                        {/* Fixed Left Sidebar Menu */}
                        <div className="industries-sidebar">
                            <ul className="ind-menu">
                                {industries.map((ind, i) => (
                                    <li
                                        key={i}
                                        className={`ind-menu-item ${activeIndustry === i ? 'active' : ''}`}
                                        onClick={() => {
                                            const el = document.getElementById(`ind-content-${i}`);
                                            if (el && scrollContainerRef.current) {
                                                // Smooth scroll the internal right container precisely to the top of the element
                                                const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
                                                const elTop = el.getBoundingClientRect().top;
                                                const targetY = scrollContainerRef.current.scrollTop + (elTop - containerTop);
                                                scrollContainerRef.current.scrollTo({ top: targetY, behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        <span className="ind-menu-number">{ind.number}</span>
                                        <span className="ind-menu-name">{ind.name}</span>
                                        {activeIndustry === i && <ChevronRight size={16} className="ind-menu-arrow" />}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Scrolling Right Content */}
                        <div className="industries-content">
                            {industries.map((ind, i) => (
                                <motion.div
                                    id={`ind-content-${i}`}
                                    key={i}
                                    className="ind-scroll-card"
                                    viewport={{ root: scrollContainerRef, margin: "-10% 0px -80% 0px", amount: 'some' }}
                                    onViewportEnter={() => setActiveIndustry(i)}
                                >
                                    <div className="ind-card-header">
                                        <div className="ind-icon-wrapper">
                                            <ind.icon size={48} className="ind-main-icon" />
                                        </div>
                                        <div className="ind-card-title-group">
                                            <h3 className="ind-card-name">{ind.name}</h3>
                                            <p className="ind-card-tagline">{ind.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="ind-card-desc">{ind.description}</p>

                                    <div className="ind-details-grid">
                                        <div className="ind-section">
                                            <div className="ind-section-content">
                                                <h4 className="ind-section-title"><CheckCircle2 size={18} className="text-primary" /> Our Capabilities</h4>
                                                <ul className="ind-list">
                                                    {ind.capabilities.map((cap, idx) => (
                                                        <li key={idx}><span>•</span> {cap}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="ind-section">
                                            <div className="ind-section-content">
                                                <h4 className="ind-section-title"><TrendingUp size={18} className="text-success" /> Business Outcomes</h4>
                                                <ul className="ind-list outcomes">
                                                    {ind.outcomes.map((out, idx) => (
                                                        <li key={idx}><span>•</span> {out}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-footer text-center" style={{ marginTop: '6rem' }}>
                    <h3 className="footer-heading">Your Industry. Our Expertise. Extraordinary Results.</h3>
                    <p className="footer-text">
                        No matter which sector you operate in, Halftone Systems brings the domain depth, technological excellence, and strategic partnership you need to lead your industry in the digital age.
                    </p>
                    <a href="#" className="btn btn-primary mt-4">Contact Halftone Systems</a>
                </div>
            </div>
        </section>
    );
};
