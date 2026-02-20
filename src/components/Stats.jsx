import React from 'react';
import './Stats.css';

export const Stats = () => {
    const stats = [
        { number: '98%', label: 'Client Retention Rate' },
        { number: '6,000+', label: 'Global Consultants' },
        { number: '20+', label: 'Years of Excellence' },
        { number: '500+', label: 'Enterprise Clients' },
    ];

    return (
        <section className="stats section-padding bg-dark">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item text-center">
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
