import React, { useState, useEffect } from "react";

import MobileNavigation from "../MobileNavigation/MobileNavigation";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";

function Navigation() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return <>
    {windowWidth > 768 ? <DesktopNavigation /> : <MobileNavigation />}
     </>

}
export default Navigation;
