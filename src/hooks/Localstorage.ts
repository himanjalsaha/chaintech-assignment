
import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  // // Get the item from local storage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Return the parsed item or the initial value
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      // If value is a function, call it with the current stored value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
