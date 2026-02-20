import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CurveSeparator } from './SectionSeparator';
import './Insights.css';

const insights = [
    { category: 'AI & Data', title: 'The Future of Generative AI in Enterprise', date: 'Oct 12, 2024' },
    { category: 'Cloud', title: 'Migrating Legacy Systems: A Strategic Guide', date: 'Sep 28, 2024' },
    { category: 'Talent', title: 'Closing the Tech Skills Gap in 2025', date: 'Sep 15, 2024' },
];

export const Insights = () => {
    return (
        <section id="insights" className="insights section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title section-title-dark">Latest Insights</h2>
                </div>
                <div className="insights-grid reveal-group">
                    {insights.map((item, i) => {
                        const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        return (
                            <div id={slug} key={i} className="insight-card">
                                <div className="insight-top">
                                    <span className="insight-category">{item.category}</span>
                                    <span className="insight-date">{item.date}</span>
                                </div>
                                <h3 className="insight-title">{item.title}</h3>
                                <a href="#" className="insight-link">Read Article <ArrowRight size={16} /></a>
                            </div>
                        );
                    })}
                </div>
                <div className="insights-footer">
                    <a href="#" className="view-all-link">View All Insights &rarr;</a>
                </div>
            </div>
            {/* Fill matches SuccessStories background (bg-light / #f8f8f8) */}
            <CurveSeparator fill="#f8f8f8" height="80px" />
        </section>
    );
};
