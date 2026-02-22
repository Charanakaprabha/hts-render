import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import './WhatWeDoTimeline.css';

export const WhatWeDoTimeline = ({ children }) => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });

    return (
        <div className="wwd-timeline-wrapper" ref={timelineRef}>
            {/* The absolute container ensures the line spans the full height of these 3 sections */}
            <div className="wwd-timeline-track-container">
                <div className="wwd-timeline-track"></div>
                <motion.div
                    className="wwd-timeline-fill"
                    style={{ scaleY: scrollYProgress }}
                />
            </div>

            <div className="wwd-timeline-content">
                {children}
            </div>
        </div>
    );
};
