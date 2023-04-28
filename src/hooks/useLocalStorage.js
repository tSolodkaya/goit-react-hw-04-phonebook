import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    } catch (error) {
      console.error('', error.message);
    }
  });
  useEffect(() => {
    try {
    } catch (error) {
      console.error('', error.message);
    }
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
};
