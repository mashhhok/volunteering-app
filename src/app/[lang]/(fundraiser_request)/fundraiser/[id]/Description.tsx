"use client";
import React from "react";
import parse from "html-react-parser";

export const Description = ({ children }: { children: string }) => {
  return <div>{parse(children)}</div>;
};
