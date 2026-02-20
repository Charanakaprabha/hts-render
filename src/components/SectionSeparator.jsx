import React from 'react';

export const SectionSeparator = ({ fill = "#ffffff", height = "60px", position = "bottom", style = {} }) => {
    // A smooth quadratic bezier curve that goes up in the center
    // M0,100 L0,100 Q50,0 100,100 L100,100 Z
    // Actually, "curve up at the center" usually means a hill shape from the bottom?
    // User said "curve up at the center".
    // 
    // Shape:
    // |       /---\       |
    // |______/     \______|
    // 
    // Or just a simple arch?
    // Let's do a simple arch that peaks in the center.
    // 
    // Path: Start bottom-left (0,height), line to top-left (0, height), 
    // wait, if it's at the bottom of a section, and we want it to curve UP into the current section from the bottom? 
    // Or curve UP from the next section?
    // 
    // "a little curve up at the center" usually implies the divider shape.
    // 
    // Let's assume standard "curve separator" where the transition shape is a curve.
    // 
    // If I put this at the BOTTOM of Section A (Bg A), and Section B (Bg B) is below.
    // To make it look like Section B is curving UP into Section A:
    // The SVG needs to be filled with Color B.
    // And shape should be a hill in the middle.
    // 
    // SVG ViewBox: 0 0 1200 120
    // M0,120 L1200,120 L1200,60 Q600,-60 0,60 Z
    // 
    // Let's try a standard sine-like curve or quadratic.

    return (
        <div
            className="section-separator"
            style={{
                position: 'absolute',
                [position]: 0,
                left: 0,
                width: '100%',
                overflow: 'hidden',
                lineHeight: 0,
                zIndex: 2,
                pointerEvents: 'none',
                ...style
            }}
        >
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{
                    position: 'relative',
                    display: 'block',
                    width: 'calc(100% + 1.3px)',
                    height: height
                }}
            >
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill={fill}
                // Wait, this path is complex. Let's do a simple symmetric curve.
                // Simple hill: M0,height Q(width/2),0 width,height Lwidth,height L0,height Z?
                // No, that fills the hill. successful "curve up" means the next section invades the current one.
                // So we want the fill to be the color of the NEXT section.
                // And the shape should be a "hill".

                />
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    fill={fill}
                ></path>
                <path
                    d="M0,0V15.81C13,36.92,47.64,50.79,98.28,60.47c84.09,16.08,183.15-4.32,269-21.05C558.21,6.58,740.41-19.34,917.33,26.34c67,17.29,134.19,37,196.48,51.81,30.33,7.21,60.48,13.06,86.19,16.35V0Z"
                    opacity=".5"
                    fill={fill}
                ></path>
                <path
                    d="M1200 120L0 16.48V0h1200v120z"
                    fill={fill}
                // This is just a triangle.
                ></path>
            </svg>

            {/* Let's try a simpler, cleaner single-path curve for "Center Up" */}
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: height
                }}
            >
                <path
                    fill={fill}
                    fillOpacity="1"
                    d="M0,320L80,293.3C160,267,320,213,480,202.7C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                // This is a wave.
                ></path>
            </svg>
        </div>
    );
};

// Re-structuring correctly for a clean "Centre Curve Up"
// We want the NEXT section's color to form a hill in the center of the CURRENT section's bottom.

export const CurveSeparator = ({ fill = "#ffffff", height = "80px", inverted = false }) => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            zIndex: 2,
            pointerEvents: 'none'
        }}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{
                    position: 'relative',
                    display: 'block',
                    width: 'calc(100% + 1.3px)',
                    height: height
                }}
            >
                {inverted ? (
                    /* Hill Shape (Convex Fill) - Rises up in center */
                    /* Used when we want the Next Section to "Invade" Upwards */
                    <path
                        d="M0,120 Q600,0 1200,120 V120 H0 Z"
                        fill={fill}
                    />
                ) : (
                    /* Valley Shape (Concave Fill) - Dips down in center */
                    /* Used when we want the Current Section to "Bulge" Downwards */
                    <path
                        d="M0,0 Q600,120 1200,0 V120 H0 Z"
                        fill={fill}
                    />
                )}
            </svg>
        </div>
    );
};

export default CurveSeparator;
