import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import '../styles/bazaar.css';
import { cld, generateImageIds, useShuffledImages } from '../hooks/covers';

export default function Bazaar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

  

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) *40;
    const y = (e.clientY / window.innerHeight) *40;

    setPosition({ x: x, y: y });
  };

  return (
    <section
        className="background"
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(-${position.x}%, -${position.y}%)` }}
    >
      
  {}
</section>

  );
}

