import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, valueDefault) => {
  
  const [storageValue, setStorageValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : valueDefault
      } catch (err) {
        console.log(`Problem : ${err}`);
        return valueDefault
      }
    });

  const setValue = value => {
    try {
      const storageValue = value instanceof Function ? value(storageValue) : value;
      setStorageValue(storageValue);
      localStorage.setItem(key, JSON.stringify(storageValue))
    } catch (err) {
      console.log(`Problem : ${err}`);
    }
  };
  return [storageValue, setValue];

};
