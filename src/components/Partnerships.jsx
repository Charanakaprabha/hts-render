import React from 'react';
import './Partnerships.css';

const LogoPlaceholder = ({ text }) => (
    <div className="partner-logo-container">
        <img
            src={`https://placehold.co/200x80/ffffff/1a1a1a?text=${text}&font=roboto`}
            alt={`${text} logo`}
            className="partner-img"
        />
    </div>
);

export const Partnerships = () => {
    // Row 1
    const partnersRow1 = [
        'Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'Cisco'
    ];

    // Row 2
    const partnersRow2 = [
        'Adobe', 'SAP', 'Siemens', 'Nvidia', 'Dell', 'HP', 'VMware', 'ServiceNow'
    ];

    return (
        <section className="partnerships section-padding">
            <div className="container-fluid">
                <p className="partners-label text-center">Trusted by Global Technology Leaders</p>

                {/* Row 1: Left to Right */}
                <div className="scroll-container">
                    <div className="scroll-track scroll-left">
                        {/* Original Set */}
                        {partnersRow1.map((p, i) => <LogoPlaceholder key={`r1-${i}`} text={p} />)}
                        {/* Duplicate Set for Loop */}
                        {partnersRow1.map((p, i) => <LogoPlaceholder key={`r1-dup-${i}`} text={p} />)}
                        {/* Extra Duplicate for Wide Screens */}
                        {partnersRow1.map((p, i) => <LogoPlaceholder key={`r1-dup2-${i}`} text={p} />)}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="scroll-container">
                    <div className="scroll-track scroll-right">
                        {partnersRow2.map((p, i) => <LogoPlaceholder key={`r2-${i}`} text={p} />)}
                        {partnersRow2.map((p, i) => <LogoPlaceholder key={`r2-dup-${i}`} text={p} />)}
                        {partnersRow2.map((p, i) => <LogoPlaceholder key={`r2-dup2-${i}`} text={p} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};
