import { useState } from 'react';

export const useAbout = () => {
  const [aboutText, setAboutText] = useState('This is the about screen');

  const updateAboutText = (newText: string) => {
    setAboutText(newText);
  };

  return { aboutText, updateAboutText };
};
