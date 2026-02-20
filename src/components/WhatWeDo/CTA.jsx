import React from 'react';
import './CTA.css';

export const CTA = () => {
    return (
        <section className="cta section-padding">
            <div className="container text-center">
                <h2 className="section-title">Ready to Transform Your Business?</h2>
                <p className="cta-text">
                    Join hundreds of forward-thinking organizations who have chosen Halftone Systems as their trusted technology transformation partner. The future belongs to those who embrace innovation today.
                </p>
                <div className="cta-features">
                    <span>✦ Free Consultation</span>
                    <span className="divider">|</span>
                    <span>Custom Demo</span>
                    <span className="divider">|</span>
                    <span>ROI Assessment</span>
                    <span className="divider">|</span>
                    <span>Fast Implementation — Go Live in 30 Days ✦</span>
                </div>
                <button className="btn btn-primary cta-btn">Contact Us Today</button>
                <p className="cta-subtext">Discover why industry leaders choose Halftone Systems.</p>
            </div>
        </section>
    );
};
