import { useCallback, useEffect, useRef, useState } from "react";

type UseResize = (callback: (width: number, prev: number) => void, render?: boolean) => void;

const useResize: UseResize = (callback, render = false) => {
  const prevWidthRef = useRef(0);
  const [width, setWidth] = useState(0);

  const cbRef = useRef(callback);
  useEffect(() => {
    cbRef.current = callback;
  }, [callback]);

  const handleResize = useCallback(() => {
    const w = window.innerWidth || document.documentElement.clientWidth;

    if (render) {
      setWidth(w);
    } else {
      cbRef.current(w, prevWidthRef.current);
      prevWidthRef.current = w;
    }
  }, [render]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // render=true ise state değişince callback'i çağır
  useEffect(() => {
    if (render) {
      cbRef.current(width, prevWidthRef.current);
      prevWidthRef.current = width;
    }
  }, [width, render]);
};

export default useResize;