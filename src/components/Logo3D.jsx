/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { Environment, Float, ContactShadows } from '@react-three/drei';

const LogoWithDepth = ({ texture, isMobile }) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Animation Logic
    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // 1. Hover Scale
        const targetScale = hovered ? 1.2 : 1; // Scale up to 1.2x on hover
        const scaleSpeed = 3; // Smooth transition

        groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, delta * scaleSpeed);
        groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, targetScale, delta * scaleSpeed);
        groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, targetScale, delta * scaleSpeed);

        // 2. Parallax Tilt (Mouse Interaction)
        // Only apply interactive tilt if NOT mobile and hovered/active
        if (!isMobile) {
            // Calculate tilt based on mouse position (state.pointer)
            // x from -1 to 1, y from -1 to 1
            const tiltX = -state.pointer.y * 0.5; // Max tilt radians vertical
            const tiltY = state.pointer.x * 0.5;  // Max tilt radians horizontal

            // Smoothly interpolate rotation
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tiltX, delta * 2);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, tiltY, delta * 2);
        } else {
            // Reset rotation on mobile or let Float handle it
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 2);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, delta * 2);
        }
    });

    // Material props
    const materialProps = {
        transparent: true,
        side: THREE.FrontSide,
        map: texture,
    };

    return (
        <group
            ref={groupRef}
            onPointerOver={() => !isMobile && setHovered(true)}
            onPointerOut={() => !isMobile && setHovered(false)}
        >
            {/* Front Layer - Main Logo */}
            <mesh position={[0, 0, 0.05]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial
                    {...materialProps}
                    emissive="#ffffff"
                    emissiveIntensity={hovered ? 0.2 : 0}
                    toneMapped={false}
                />
            </mesh>

            {/* Middle Layer - Thickness Simulation (Purple Tint) */}
            <mesh position={[0, 0, 0]}>
                <planeGeometry args={[5.05, 5.05]} /> {/* Slightly larger for border effect */}
                <meshStandardMaterial
                    transparent
                    map={texture}
                    color="#8800ff" // Purple tint for depth
                    opacity={0.8}
                />
            </mesh>

            {/* Back Layer - Shadow/Depth (Dark) */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[5.05, 5.05]} />
                <meshStandardMaterial
                    transparent
                    map={texture}
                    color="#000000"
                    opacity={0.9}
                />
            </mesh>

            {/* Glow Light (only active on hover) */}
            <pointLight
                position={[0, 0, 1]}
                intensity={hovered ? 2 : 0}
                distance={5}
                color="#aa00ff"
            />
        </group>
    );
};

export const Logo3D = () => {
    // Detect mobile (simple width check)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Load the original HS.png or logo_HS.png - checking file list, user asked to reverse to "layer" state
    // In that state, they were using HS.png or likely logo_HS.png if HS.png is gone.
    // I know 'logo_HS.png' exists. I will use that one.
    const texture = useLoader(TextureLoader, '/src/assets/HS_LOGO.png');

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: isMobile ? 'default' : 'pointer' }}>
            <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                {/* Cinematic Lighting */}
                <ambientLight intensity={0.5} color="#443355" /> {/* Purple-ish ambient */}
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    color="#ffffff"
                />
                <spotLight
                    position={[-10, -5, 5]}
                    angle={0.5}
                    penumbra={1}
                    intensity={2}
                    color="#9900ff" /* Secondary purple rim light */
                />

                {/* Float wrapper for idle floating effect (especially on mobile) */}
                <Float speed={2} rotationIntensity={isMobile ? 0.5 : 0.2} floatIntensity={isMobile ? 1 : 0.5}>
                    <LogoWithDepth texture={texture} isMobile={isMobile} />
                </Float>

                {/* Environment Reflections */}
                <Environment preset="city" />

                {/* Soft Contact Shadow */}
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.6}
                    scale={10}
                    blur={2.5}
                    far={4}
                    color="#5500aa"
                />
            </Canvas>
        </div>
    );
};
