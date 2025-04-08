"use client"

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'phosphor-react';

const ScrollTotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  
  <button
    className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 text-white text-xl sm:text-2xl rounded-full bg-p1 hover:bg-s2 border border-p1 hover:border-white p-2 sm:p-3 z-50 ${isVisible ? '' : 'hidden'}`}
    aria-label="Scroll to top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <ArrowUp />
  </button>
  );
};

export default ScrollTotop;
