import { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createStars = (type, quantity) => {
      for (let i = 0; i < quantity; i++) {
        const star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;


        star.style.animationDuration = `${Math.random() * 150 + 50}s`;
        container.appendChild(star);
      }
    };

    createStars(1, 100);
    createStars(2, 85);
    createStars(3, 70);

    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.5;
      if (window.scrollY > triggerPoint) {
        container.style.opacity = '1';
      } else {
        container.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="stars-container" ref={containerRef} />;
};

export default Starfield;
