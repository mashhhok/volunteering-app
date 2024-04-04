import React from "react";

export const NoImgSVG = (props: ISVG) => {
  return (
    <svg
      width={props.width ? props.width : "20"}
      height={props.height ? props.height : "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9C1 5.229 1 3.343 2.172 2.172C3.343 1 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C19 3.343 19 5.229 19 9V11C19 14.771 19 16.657 17.828 17.828C16.657 19 14.771 19 11 19H9C5.229 19 3.343 19 2.172 17.828C1 16.657 1 14.771 1 11V9Z"
        stroke="#F3F4FC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.998 12.2908L16.654 11.9478L16.639 11.9318C16.238 11.5318 15.915 11.2088 15.631 10.9698C15.339 10.7238 15.055 10.5358 14.722 10.4358C14.2511 10.2937 13.7489 10.2937 13.278 10.4358C12.945 10.5358 12.661 10.7238 12.368 10.9698C12.085 11.2088 11.762 11.5318 11.361 11.9318L11.346 11.9478C11.046 12.2478 10.846 12.4478 10.683 12.5818C10.522 12.7148 10.452 12.7368 10.423 12.7418C10.3024 12.7629 10.1782 12.7391 10.074 12.6748C10.05 12.6588 9.993 12.6128 9.893 12.4298C9.75479 12.1568 9.62801 11.8782 9.513 11.5948L9.46 11.4708L9.447 11.4418C9.083 10.5918 8.793 9.91475 8.511 9.41375C8.224 8.90375 7.905 8.49875 7.446 8.26875C7.03467 8.06267 6.57444 7.97408 6.116 8.01275C5.603 8.05575 5.157 8.31275 4.701 8.67975C4.253 9.04075 3.732 9.56075 3.078 10.2158L3.056 10.2368L3 10.2938V11.7078L3.763 10.9438C4.444 10.2638 4.927 9.78175 5.328 9.45875C5.728 9.13775 5.983 9.02775 6.199 9.00875C6.47444 8.98549 6.75094 9.03878 6.998 9.16275C7.192 9.25975 7.388 9.45675 7.639 9.90375C7.892 10.3538 8.161 10.9788 8.54 11.8638L8.594 11.9888L8.604 12.0118C8.758 12.3718 8.888 12.6758 9.014 12.9078C9.144 13.1468 9.304 13.3738 9.548 13.5248C9.86103 13.7185 10.2344 13.7904 10.597 13.7268C10.879 13.6768 11.111 13.5248 11.32 13.3518C11.524 13.1838 11.758 12.9498 12.036 12.6718L12.053 12.6548C12.473 12.2348 12.766 11.9428 13.013 11.7348C13.255 11.5298 13.419 11.4378 13.567 11.3928C13.849 11.3078 14.151 11.3078 14.433 11.3928C14.581 11.4378 14.745 11.5298 14.987 11.7338C15.234 11.9428 15.527 12.2348 15.947 12.6548L16.976 13.6828C16.989 13.2728 16.995 12.8128 16.998 12.2908Z"
        fill="#F3F4FC"
      />
      <path
        d="M14.5 7C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 13 4.67157 13 5.5C13 6.32843 13.6716 7 14.5 7Z"
        fill="#F3F4FC"
      />
    </svg>
  );
};