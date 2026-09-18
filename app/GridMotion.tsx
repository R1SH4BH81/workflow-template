'use client';

import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';

interface GridMotionProps {
    items?: (string | ReactNode)[];
    gradientColor?: string;
    className?: string;
}

const GridMotion: FC<GridMotionProps> = ({ 
    items = [], 
    gradientColor = '#050508',
    className = ''
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mouseXRef = useRef<number>(0);

    const totalItems = 28;
    const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
    const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

    useEffect(() => {
        if (typeof window === 'undefined') return;
        mouseXRef.current = window.innerWidth / 2;

        gsap.ticker.lagSmoothing(0);

        const handleMouseMove = (e: MouseEvent): void => {
            mouseXRef.current = e.clientX;
        };

        const updateMotion = (): void => {
            const maxMoveAmount = 260;
            const baseDuration = 0.8;
            const inertiaFactors = [0.6, 0.4, 0.3, 0.2];
            const screenWidth = window.innerWidth || 1920;

            rowRefs.current.forEach((row, index) => {
                if (row) {
                    const direction = index % 2 === 0 ? 1 : -1;
                    const moveAmount = ((mouseXRef.current / screenWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

                    gsap.to(row, {
                        x: moveAmount,
                        duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
                        ease: 'power3.out',
                        overwrite: 'auto'
                    });
                }
            });
        };

        const removeAnimationLoop = gsap.ticker.add(updateMotion);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            removeAnimationLoop();
        };
    }, []);

    return (
        <div className={`noscroll ${className}`} ref={gridRef}>
            <section
                className="intro"
                style={{
                    background: `radial-gradient(circle at center, ${gradientColor} 0%, #030305 100%)`
                }}
            >
                <div className="gridMotion-container">
                    {Array.from({ length: 4 }, (_, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="row"
                            ref={el => {
                                rowRefs.current[rowIndex] = el;
                            }}
                        >
                            {Array.from({ length: 7 }, (_, itemIndex) => {
                                const content = combinedItems[rowIndex * 7 + itemIndex];
                                return (
                                    <div key={itemIndex} className="row__item">
                                        <div className="row__item-inner">
                                            {typeof content === 'string' && (content.startsWith('http') || content.startsWith('/')) ? (
                                                <div
                                                    className="row__item-img"
                                                    style={{
                                                        backgroundImage: `url(${content})`
                                                    }}
                                                />
                                            ) : (
                                                <div className="row__item-content">{content}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="fullview" />
            </section>
        </div>
    );
};

export default GridMotion;
