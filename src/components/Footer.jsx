import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-top section-padding"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="footer-col" variants={itemVariants}>
                        <h3 className="footer-logo">HALFTONE</h3>
                        <p className="footer-desc">
                            Empowering business transformation through technology and talent.
                        </p>
                        <div className="social-icons">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div className="footer-col" variants={itemVariants}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#intro">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </motion.div>

                    <motion.div className="footer-col" variants={itemVariants}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#it-consulting-strategy">Digital Strategy</a></li>
                            <li><a href="#cloud-technologies">Cloud & DevOps</a></li>
                            <li><a href="#data-science-analytics">Data & Analytics</a></li>
                            <li><a href="#cybersecurity-solutions">Cybersecurity</a></li>
                        </ul>
                    </motion.div>

                    <motion.div className="footer-col" variants={itemVariants}>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#contact">Locations</a></li>
                            <li><a href="#contact">Contact Support</a></li>
                            <li><a href="#contact">Sales Inquiry</a></li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <p>&copy; 2026 Halftone Systems. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
