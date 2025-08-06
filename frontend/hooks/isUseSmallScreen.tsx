import { useEffect, useState } from "react";

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    setIsSmallScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;
