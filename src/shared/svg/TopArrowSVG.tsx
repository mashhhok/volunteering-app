"use client";
import React from "react";

export const TopArrowSVG = (props: ISVG) => {
  return (
    <svg
    width={props.width ? props.width : 21}
    height={props.height ? props.height : 22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.59155 4.72431L2.24984 12.066L0.599922 10.4161L10.7582 0.257813L20.9165 10.4161L19.2666 12.066L11.9249 4.72431L11.9249 21.7411H9.59155L9.59155 4.72431Z"
        fill="#F3F4FC"
      />
    </svg>
  );
};
