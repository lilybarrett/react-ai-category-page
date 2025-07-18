import { useEffect, useState } from "react";
import * as tokenStyles from "../styles/tokens.css";

export function useIsMobile(query = tokenStyles.breakpoints.mobile) {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(tokenStyles.breakpoints.mobile).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    let timeoutId: number;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsMobile(mediaQuery.matches);
      }, 150); // Debounced by 150ms
    };

    handleResize(); // Initial check

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
}
