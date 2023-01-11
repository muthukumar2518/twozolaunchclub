import React from "react";

export const CheckBoxOutline = (height,width) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ fill: "none" }}
      viewBox="0 -3 24 32"
    >
      <rect
        opacity="0.2"
        x="2"
        y="2"
        width="22"
        height="22"
        rx="3"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
