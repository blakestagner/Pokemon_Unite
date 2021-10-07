import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import SideNav from "./SideNav";

export default function Navigation() {
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1525;
    
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
    }, []);

    
    return (
        <>
            <Toolbar />
            {width > breakpoint ? <SideNav /> : null}
        </>
    )
}