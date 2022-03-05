import React from "react";

export const useFocus = () => {
  const htmlElRef = React.useRef<any>(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus] as const;
};
