import React from 'react';
import { Cloud, ShieldCheck, GitMerge } from 'lucide-react';
import './SuccessStories.css';

const stories = [
    {
        icon: Cloud,
        category: 'Cloud',
        title: 'Global Retailer Scales Cloud Infrastructure',
        description: 'Deployed a multi-region cloud architecture on AWS, reducing latency by 60% and cutting infrastructure costs by 35%.',
        cta: 'Read Case Study'
    },
    {
        icon: ShieldCheck,
        category: 'Security',
        title: 'Healthcare Provider Secures Patient Data',
        description: 'Implemented zero-trust security model and HIPAA-compliant data governance, achieving 100% audit pass rate.',
        cta: 'Read Case Study'
    },
    {
        icon: GitMerge,
        category: 'DevOps',
        title: 'Fintech Startup Accelerates Product Launch',
        description: 'Built a full CI/CD pipeline with containerisation, reducing deployment time from days to minutes.',
        cta: 'Read Case Study'
    },
];

export const SuccessStories = () => {
    return (
        <section id="success-stories" className="stories section-padding bg-light">
            <div className="container">
                <div className="section-header reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <h2 className="section-title section-title-dark">Success Stories</h2>
                    <a href="#" className="view-all-link">View All Work &rarr;</a>
                </div>
                <div className="stories-grid reveal-group">
                    {stories.map((story, i) => {
                        const slug = story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        const Icon = story.icon;
                        return (
                            <div id={slug} key={i} className="story-card">
                                <div className="story-card-header">
                                    <Icon size={32} className="story-header-icon" />
                                    <span className="story-header-label">{story.category}</span>
                                </div>
                                <div className="story-card-content">
                                    <h3 className="story-title">{story.title}</h3>
                                    <p className="story-description">{story.description}</p>
                                    <a href="#" className="story-cta">Read Case Study &rarr;</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
