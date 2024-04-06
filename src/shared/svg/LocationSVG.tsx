import React from "react";

export const LocationSVG = (props: ISVG) => {
  return (
    <svg
      width={props.width ? props.width :  12 }
      height={props.height ? props.height :  12 }
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 13.6077L6.38367 13.2727C9.61007 10.4554 11.25 7.99553 11.25 5.83325C11.25 2.77114 8.86005 0.583252 6 0.583252C3.13995 0.583252 0.75 2.77114 0.75 5.83325C0.75 7.99553 2.38993 10.4554 5.61633 13.2727L6 13.6077ZM6 12.0536C3.26219 9.58615 1.91667 7.4953 1.91667 5.83325C1.91667 3.4396 3.7624 1.74992 6 1.74992C8.2376 1.74992 10.0833 3.4396 10.0833 5.83325C10.0833 7.4953 8.73781 9.58615 6 12.0536ZM6 2.91659C7.61083 2.91659 8.91667 4.22242 8.91667 5.83325C8.91667 7.44408 7.61083 8.74992 6 8.74992C4.38917 8.74992 3.08333 7.44408 3.08333 5.83325C3.08333 4.22242 4.38917 2.91659 6 2.91659ZM4.25 5.83325C4.25 4.86675 5.0335 4.08325 6 4.08325C6.9665 4.08325 7.75 4.86675 7.75 5.83325C7.75 6.79975 6.9665 7.58325 6 7.58325C5.0335 7.58325 4.25 6.79975 4.25 5.83325Z"
        fill="#7D7D7D"
      />
    </svg>
  );
};
