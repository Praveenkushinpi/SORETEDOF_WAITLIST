"use client";
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for hoverable elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('button, a, [data-cursor="pointer"], input, textarea, select');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          const cursorType = el.getAttribute('data-cursor') || 'pointer';
          setCursorVariant(cursorType);
        });
        
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorVariant('default');
        });
      });
    };

    // Add listeners for text selection
    const addTextListeners = () => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      
      textElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          const selection = window.getSelection();
          if (selection && selection.toString()) {
            setCursorVariant('text');
          }
        });
      });
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(() => {
      addHoverListeners();
      addTextListeners();
    }, 100);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const getCursorStyles = () => {
    const baseStyles = {
      left: mousePosition.x,
      top: mousePosition.y,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.1s ease-out',
    };

    switch (cursorVariant) {
      case 'pointer':
        return {
          ...baseStyles,
          width: isClicking ? '40px' : '50px',
          height: isClicking ? '40px' : '50px',
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
          border: '2px solid #3b82f6',
        };
      case 'text':
        return {
          ...baseStyles,
          width: '2px',
          height: '20px',
          backgroundColor: '#3b82f6',
          borderRadius: '1px',
        };
      case 'grab':
        return {
          ...baseStyles,
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(34, 197, 94, 0.3)',
          border: '2px solid #22c55e',
        };
      default:
        return {
          ...baseStyles,
          width: isClicking ? '20px' : '25px',
          height: isClicking ? '20px' : '25px',
          backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.8)',
          border: isHovering ? '2px solid #ef4444' : '2px solid rgba(0, 0, 0, 0.3)',
        };
    }
  };

  return (
    <>
      {/* Hide default cursor */}
     <style jsx global>{`
  #app {
    cursor: none !important;
  }

  #app * {
    cursor: none !important;
  }
`}</style>    
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          borderRadius: cursorVariant === 'text' ? '1px' : '50%',
          mixBlendMode: 'difference',
          ...getCursorStyles(),
        }}
      />
      
      {/* Cursor trail effect */}
      <div
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'all 0.3s ease-out',
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  );
};
export default CustomCursor;