import React from "react";
import clsx from "clsx";

interface BlobProps {
  size?: number | string;
  sizePhone?: number | string;
  colors?: [string, string];
  position?: string;
  className?: string;
}
const Blob: React.FC<BlobProps> = ({
  size = 100,
  colors = ["from-primary", "to-secondary"],
  position = "top-0 left-0",
  className = "",
}) => {
  const sizeStyle =
    typeof size === "number"
      ? { width: `${size}px`, height: `${size}px` }
      : undefined;

  return (
    <div
      className={clsx(
        "absolute rounded-full blur-2xl",
        `bg-gradient-to-r ${colors[0]} ${colors[1]}`,
        typeof size === "string" ? size : undefined,
        position,
        className
      )}
      style={sizeStyle}
    />
  );
};


export default Blob;
