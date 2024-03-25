import React from 'react';

export const useDebounce = () => {
  let timer = React.useRef<any>();

  return (func: () => any, ms: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(func, ms);
  };
};