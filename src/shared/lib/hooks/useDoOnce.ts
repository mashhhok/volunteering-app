import React from "react";

export const useDoOnce = (func: Function) => {
  let count = 0;

  return () => {
    if (count > 0) return;
    func();
    count++;
  };
};
