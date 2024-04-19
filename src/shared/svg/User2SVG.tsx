import React from "react";

export const User2SVG = (props: ISVG) => {
  return (
    <svg
    width={props.width ? props.width : "52"}
    height={props.height ? props.height : "52"}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.3333 45.5V41.1667C43.3333 38.8681 42.4202 36.6637 40.7949 35.0384C39.1696 33.4131 36.9652 32.5 34.6666 32.5H17.3333C15.0347 32.5 12.8303 33.4131 11.205 35.0384C9.57972 36.6637 8.66663 38.8681 8.66663 41.1667V45.5"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 23.8333C30.7865 23.8333 34.6667 19.9531 34.6667 15.1667C34.6667 10.3802 30.7865 6.5 26 6.5C21.2136 6.5 17.3334 10.3802 17.3334 15.1667C17.3334 19.9531 21.2136 23.8333 26 23.8333Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
