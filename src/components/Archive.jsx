import React, {useEffect, useState} from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

export default function Archive(){
    
    const cld = new Cloudinary({ cloud: { cloudName: 'dlh9ifjuy' } });
    // Generar los ids.
    const generateImageIds = () => {
        const ids = [];
        for (let i = 1; i < 117; i++) {
          ids.push(i.toString());
        }
        return ids;
    };

    // Desordenar los ids.
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Estado para las imágenes mezcladas
    const [shuffledImages, setShuffledImages] = useState([]);

    // Mezclar las imágenes al montar el componente
    useEffect(() => {
        const ids = generateImageIds();
        setShuffledImages(shuffleArray(ids));
    }, []); // 
    
    return (
        <div className="ml-10 grid grid-cols-4 gap-4">
          {shuffledImages.map((imageId, index) => {
            const img = cld
              .image(imageId)  // Usar solo el número como publicId
              .format('auto')
              .quality('auto');
    
            return (
              <AdvancedImage className='max-w-[80%] mx-auto shadow-2xl shadow-black hover:scale-110 transition-transform duration-300 cursor-pointer' key={index} cldImg={img} />
            );
          })}
        </div>
      );
  
    
};
  
    
