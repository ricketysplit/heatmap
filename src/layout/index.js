import React from "react";

export const Column = ({ children }) => {
  const columnStyle = {
    display: "flex",
    flexDirection: "column"
  };
  return <div style={columnStyle}>{children}</div>;
};

export const Row = ({ children }) => {
  const rowStyle = {
    display: "flex",
    flexDirection: "row"
  };
  return <div style={rowStyle}>{children}</div>;
};
