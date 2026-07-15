import { useEffect, useRef } from "react";
import gsap from "gsap";

function Reveal({ children }) {
    const ref = useRef();

    useEffect(() => {
        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            }
        );
    }, []);

    return <div ref={ref}>{children}</div>;
}

export default Reveal;