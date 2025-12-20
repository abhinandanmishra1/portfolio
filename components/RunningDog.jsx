"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RunningDog = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [dogPos, setDogPos] = useState({ x: 100, y: 100 });
    const [direction, setDirection] = useState('right');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const moveDog = () => {
            setDogPos((prev) => {
                const dx = mousePos.x - prev.x;
                const dy = mousePos.y - prev.y;

                // Update direction
                if (dx > 5) setDirection('right');
                else if (dx < -5) setDirection('left');

                // Move dog towards mouse with linear interpolation
                const speed = 0.05;
                return {
                    x: prev.x + dx * speed,
                    y: prev.y + dy * speed,
                };
            });
        };

        const interval = setInterval(moveDog, 16); // ~60fps
        return () => clearInterval(interval);
    }, [mousePos]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999]"
            animate={{
                x: dogPos.x - 25,
                y: dogPos.y - 25,
                scaleX: direction === 'right' ? 1 : -1,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
            <div className="text-4xl">🐕</div>
            {/* Once we have a better sprite, we can replace the emoji with an img */}
        </motion.div>
    );
};

export default RunningDog;
