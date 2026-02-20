import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top section-padding">
                    <div className="footer-col">
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
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#intro">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#it-consulting-strategy">Digital Strategy</a></li>
                            <li><a href="#cloud-technologies">Cloud & DevOps</a></li>
                            <li><a href="#data-science-analytics">Data & Analytics</a></li>
                            <li><a href="#cybersecurity-solutions">Cybersecurity</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#contact">Locations</a></li>
                            <li><a href="#contact">Contact Support</a></li>
                            <li><a href="#contact">Sales Inquiry</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Halftone Systems. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
