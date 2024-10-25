// hooks/imagesHook.js
import { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({ cloud: { cloudName: 'dlh9ifjuy' } });

export const useShuffledImages = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  return { shuffledImages, setShuffledImages };
};

export const generateImageIds = () => {
  const ids = [];
  for (let i = 1; i <= 116; i++) {
    ids.push(i);
  }
  return ids;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
