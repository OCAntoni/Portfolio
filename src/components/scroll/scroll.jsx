import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 250) { 
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    },[]);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`scroll-div ${isVisible ? 'visible' : 'hidden'}`} onClick={handleScrollToTop}>
            <FontAwesomeIcon id="scroll" icon={faMountain} />
        </div>
    )
}

export default Scroll