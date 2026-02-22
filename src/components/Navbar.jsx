import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'What We Do',
            href: '#intro',
            dropdown: [
                { name: 'Enterprise Applications', href: '#enterprise-business-applications' },
                { name: 'AI & Machine Learning', href: '#ai-machine-learning' },
                { name: 'Blockchain Solutions', href: '#blockchain-solutions' },
                { name: 'Cloud Technologies', href: '#cloud-technologies' },
                { name: 'Cybersecurity', href: '#cybersecurity-solutions' },
                { name: 'Mobile Development', href: '#mobile-app-development' },
                { name: 'Data Science', href: '#data-science-analytics' },
                { name: 'Automation', href: '#automation-intelligent-rpa' },
                { name: 'Web Development', href: '#web-development' },
                { name: 'Digital Marketing', href: '#digital-marketing-growth' },
                { name: 'IT Consulting', href: '#it-consulting-strategy' },
                { name: 'Staffing & Talent', href: '#staffing-talent-solutions' },
                { name: 'Product Development', href: '#product-development' }
            ]
        },
        {
            name: 'Industries',
            href: '#industries',
            dropdown: [
                { name: 'Automotive', href: '#automotive' },
                { name: 'Healthcare', href: '#healthcare' },
                { name: 'Pharmaceutical', href: '#pharmaceutical' },
                { name: 'Life Sciences', href: '#life-sciences' },
                { name: 'Retail', href: '#retail' },
                { name: 'Travel & Tourism', href: '#travel-tourism' },
                { name: 'Education & Research', href: '#education-research' },
                { name: 'Media & Entertainment', href: '#media-entertainment' }
            ]
        },
        {
            name: 'Who We Are',
            href: '#who-we-are',
            dropdown: []
        },
        {
            name: 'Success Stories',
            href: '#success-stories',
            dropdown: []
        },
        {
            name: 'Careers',
            href: '#careers',
            dropdown: []
        },
    ];

    const handleLinkClick = () => setIsMobileMenuOpen(false);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

            {/* ── ROW 1: Brand + Utility actions ── */}
            <div className="navbar-top">
                <div className="container navbar-top-inner">
                    {/* Logo / Brand */}
                    <div className="navbar-logo">
                        <a href="#" className="logo-link" onClick={scrollToTop}>
                            <img src="/src/assets/HS_LOGO.png" alt="Halftone Logo" className="logo-img hs-logo" />
                            <img src="/src/assets/name.png" alt="Halftone Systems" className="logo-img name-img" />
                        </a>
                    </div>

                    {/* Utility: Contact + Mobile toggle */}
                    <div className="navbar-utility">
                        <a href="#contact" className="contact-btn" onClick={handleLinkClick}>
                            Contact Us
                        </a>
                        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── ROW 2: Navigation links with dividers ── */}
            <div className="navbar-bottom">
                <div className="container">
                    <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link, idx) => (
                            <React.Fragment key={link.name}>
                                {idx > 0 && <span className="nav-divider" />}
                                <div className="nav-item">
                                    <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                                        {link.name} <ChevronDown size={13} className="dropdown-icon" />
                                    </a>
                                    <div className={`dropdown-menu ${link.name === 'What We Do' ? 'grid-3col' :
                                        link.name === 'Industries' ? 'grid-2col' : ''
                                        }`}>
                                        {link.dropdown.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="dropdown-item"
                                                onClick={handleLinkClick}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    );
};
