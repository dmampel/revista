import React, {useEffect} from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { cld, generateImageIds, shuffleArray, useShuffledImages } from '../hooks/covers';

export default function Archive(){
  const { shuffledImages, setShuffledImages } = useShuffledImages();
    
  useEffect(() => {
      const ids = generateImageIds();
      setShuffledImages(shuffleArray(ids));
  },[setShuffledImages]); // 
    
  return (
    
    <div className="grid grid-cols-4 gap-4">
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
  
    
