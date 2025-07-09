'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;    
  threshold?: number;  
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

    const el = ref.current;            

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el); 
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
