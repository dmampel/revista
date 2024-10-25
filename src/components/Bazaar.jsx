import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import '../styles/bazaar.css';
import { cld, generateImageIds, useShuffledImages } from '../hooks/covers';

export default function Bazaar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { shuffledImages, setShuffledImages } = useShuffledImages();

  useEffect(() => {
    const ids = generateImageIds();
    setShuffledImages(ids);
  }, [setShuffledImages]);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) *100;
    const y = (e.clientY / window.innerHeight) *100;

    setPosition({ x: x, y: y });
  };

  return (
    <div
    className="background"
    onMouseMove={handleMouseMove}
    style={{ transform: `translate(-${position.x}%, -${position.y}%)` }}
    >
    {/* Aquí puedes mapear las revistas */}
    <div className="revista" style={{ '--top': 0.1, '--left': 0.2 }}>Revista 1</div>
    <div className="revista" style={{ '--top': 0.3, '--left': 0.6 }}>Revista 2</div>
  </div>
  );
}

