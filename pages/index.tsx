import React, { useLayoutEffect, useRef } from "react";
import Brain from "@icons/brain.svg";

/**
 * generates a random HEX color
 * @returns
 */
function randomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useLayoutEffect(() => {
    setInterval(() => {
      if (ref.current) {
        ref.current.setAttribute("stroke", randomHexColor());
      }
    }, 1000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Brain width="50" ref={ref} />
    </div>
  );
};
