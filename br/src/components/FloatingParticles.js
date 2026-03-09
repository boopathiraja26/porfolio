import React, { useMemo, useEffect, useRef } from 'react';

const FloatingParticles = ({ count = 30 }) => {
    const containerRef = useRef(null);
    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 10 + 5}px`,
            duration: `${Math.random() * 20 + 10}s`,
            delay: `${Math.random() * 10}s`,
        }));
    }, [count]);

    useEffect(() => {
        const REPEL_RADIUS = 130;
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const inners = container.querySelectorAll('.particle-inner');
            inners.forEach(inner => {
                const rect = inner.getBoundingClientRect();
                const px = rect.left + rect.width / 2;
                const py = rect.top + rect.height / 2;
                const dx = px - e.clientX;
                const dy = py - e.clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < REPEL_RADIUS) {
                    const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
                    const moveX = (dx / dist) * force * 70;
                    const moveY = (dy / dist) * force * 70;
                    inner.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.6})`;
                    inner.style.opacity = '1';
                } else {
                    inner.style.transform = '';
                    inner.style.opacity = '';
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-particles" ref={containerRef}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        '--duration': p.duration,
                        '--delay': p.delay,
                    }}
                >
                    <div className="particle-inner" />
                </div>
            ))}
        </div>
    );
};

export default FloatingParticles;
