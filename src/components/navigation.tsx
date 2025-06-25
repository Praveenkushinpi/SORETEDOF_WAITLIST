"use client";
import React, { useState } from 'react';
import { Menu, X, Home, Users, Zap, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import CircularText from './ui/circulartext';

const CircularNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="relative">
      {/* Circular text animation */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        
      </div>
    <div className="fixed top-6 right-6 z-50">
      {/* Main circular button */}
      
      <button
        onClick={toggleMenu}
        className={`w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-black hover:scale-105 border border-gray-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
          
      {/* Navigation menu */}
      <div
        className={`absolute top-20 right-0 transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 transform translate-y-0 scale-100'
            : 'opacity-0 transform -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <CircularText
          text="Explore the Future"
          className={`text-gray-500 text-sm ${
            isOpen ? 'animate-slide-in' : ''
          }`}
        />
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-200 p-2 min-w-48">
          {/* Home */}
          <div onClick={() => setIsOpen(false)}>
            <Link href="/">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 transform hover:scale-[1.02]">
                <Home size={20} />
                <span className="font-medium">Home</span>
              </div>
            </Link>
          </div>

          {/* Waitlist */}
          <div onClick={() => setIsOpen(false)}>
            <Link href="/waitlist">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 transform hover:scale-[1.02]">
                <Users size={20} />
                <span className="font-medium">Waitlist</span>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div onClick={() => setIsOpen(false)}>
            <Link href="/features">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 transform hover:scale-[1.02]">
                <Zap size={20} />
                <span className="font-medium">Features</span>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div onClick={() => setIsOpen(false)}>
            <Link href="//#quicklinks">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 transform hover:scale-[1.02]">
                <ExternalLink size={20} />
                <span className="font-medium">Quick Links</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
</div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CircularNavbar;