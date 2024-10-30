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
  {shuffledImages.map((imageId, index) => {
    // Genera valores aleatorios de top y left para cada revista
    const top = Math.random() * 150;  // Valores entre 0 y 90 para top
    const left = Math.random() * 150; // Valores entre 0 y 90 para left

    // Crea la imagen de Cloudinary
    const img = cld
      .image(imageId)
      .format('auto')
      .quality('auto');

    return (
      <div
        key={index}
        className="revista"
        style={{ 
          '--top': `${top}%`, 
          '--left': `${left}%` 
        }}
      >
        <AdvancedImage 
          className='max-w-[20%] mx-auto  transition-transform duration-300 cursor-pointer' 
          cldImg={img} 
        />
        
      </div>
    );
  })}
</div>

  );
}

