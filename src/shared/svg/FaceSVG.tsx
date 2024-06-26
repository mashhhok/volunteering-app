import React from "react";

export const FaceSVG = (props: ISVG) => {
  return (
    <svg
      width={props.width ? props.width : 24}
      height={props.width ? props.width : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2H20.1818C21.186 2 22 2.89543 22 4V8H20V4H16V2ZM3.81818 22H8V20H4V16H2V20C2 21.1046 2.81403 22 3.81818 22ZM16 20V22H20.1818C21.186 22 22 21.1046 22 20V16H20V20H16ZM8 4V2H3.81818C2.81403 2 2 2.89543 2 4V8H4V4H8Z"
        fill="#FF9029"
      />
      <path
        d="M8 14C8 15 9 17 12 17C15 17 16 15 16 14"
        stroke="#FF9029"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11.9971 7C11.9971 7 11.9971 11 12.0001 12C12.0001 12.5 11.5001 13 11.0001 13C10.5001 13 10.293 13 10.293 13"
        stroke="#FF9029"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="15" y="7" width="2" height="3" fill="#FF9029" />
      <rect x="7" y="7" width="2" height="3" fill="#FF9029" />
    </svg>
  );
};
