'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string; // animation class (e.g., 'animate-text-glitch')
  threshold?: number; // how much of element should be visible to trigger
}

export default function ScrollAnimate({
  children,
  className = '',
  threshold = 0.2,
}: ScrollAnimateProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? className : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
}
