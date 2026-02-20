import React, { useRef } from 'react';
import hsLogo from '../assets/HS_LOGO.png';
import './HeroLogo3D.css';

export const HeroLogo3D = () => {
    const cardRef = useRef(null);

    return (
        <div className="logo3d-scene">
            <div className="logo3d-wrapper">
                {/* Logo — no rings */}
                <div className="logo3d-card" ref={cardRef}>
                    <img
                        src={hsLogo}
                        alt="Halftone Systems Logo"
                        className="logo3d-img"
                        draggable={false}
                    />
                </div>

                {/* Floating shadow */}
                <div className="logo3d-shadow" />
            </div>
        </div>
    );
};
