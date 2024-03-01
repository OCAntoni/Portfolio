import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

function Scroll() {
    const [isVisible, setIsVisible] = useState(false); // init local state for control visibility button

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 250) { // setting when the div will be visible
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

    const handleScrollToTop = () => { // scroll the page to the top smooth
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`scroll-div ${isVisible ? 'visible' : 'hidden'}`} onClick={handleScrollToTop}>
            <FontAwesomeIcon id="scroll" icon={faMountain} />
        </div>
    )
}

export default Scroll