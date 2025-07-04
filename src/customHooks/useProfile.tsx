import { useState } from 'react';

export const useProfile = () => {
  const [profile, setProfile] = useState<{
    name: string;
    age: number;
    skill: string;
  }>({
    name: '',
    age: 0,
    skill:'',
  });

  const updateProfile = (newProfile: typeof profile) => {
    setProfile(newProfile);
  };

  return { profile, updateProfile };
};
