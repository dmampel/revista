import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import '../styles/bazaar.css';
import { cld, generateImageIds} from '../hooks/covers';

export default function Bazaar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([]);
  
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) *40;
    const y = (e.clientY / window.innerHeight) *40;

    setPosition({ x: x, y: y });
  };

  useEffect(() => {
    const ids = generateImageIds(); // Obtén los ids de las imágenes.
    const positionedImages = ids.map(id => ({
      id,
      top: `${Math.random() * 260}vh`,     // Posición aleatoria en la pantalla.
      left: `${Math.random() * 260}vw`,
      rotation: `${Math.random() * 20 - 10}deg`, // Rotación aleatoria entre -10 y 10 grados.
    }));
    setImages(positionedImages);
  }, []);

  return (
    <section
        className="background cursor-none"
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(-${position.x}%, -${position.y}%)` }}
    >
      
      {images.map(({ id, top, left, rotation }) => {
        const img = cld.image(id).format('auto').quality('auto');
        return (
          
              <AdvancedImage
              key={id}
              cldImg={img}
              style={{
                position: 'fixed',
                top,
                left,
                transform: `rotate(${rotation})`,
                transition: 'transform 0.3s ease-out',
                width: '5%', // Ajusta el tamaño de las imágenes aquí según tus preferencias.
              }}
            />
            
          
        );
      })}
    </section>

  );
}

