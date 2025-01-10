import { useEffect, useRef, useState } from "react";

export default function useElementData() {
  const elementRef = useRef(null);
  const [elementData, setElementData] = useState(null);

  function updataElementData() {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const data = {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      };
      setElementData(data);
    }
  }

  useEffect(() => {
    updataElementData();
    window.addEventListener("resize", updataElementData);

    return () => {
      window.removeEventListener("resize", updataElementData);
    };
  }, []);

  return { elementRef, elementData };
}
