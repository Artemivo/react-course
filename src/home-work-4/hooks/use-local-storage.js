import React, { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [storageValue, setStorage] = useState(() => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  });

  const setValue = (value) => {
    setStorage(value);

    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storageValue, setValue];
};
