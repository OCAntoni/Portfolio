import { useState, useEffect } from "react"

import dataProjets from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function Slider({images}) {
    const [currentIndex , setCurrentIndex]= useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    function next() {
        setCurrentIndex((prevIndex) => (prevIndex === dataProjets.length - 1 ? 0 : prevIndex + 1));
    }

    function goToProject(index) {
        setCurrentIndex(index); 
    }

    return (
        <div id="news">
            <h2 className="section-title">
                Découvrez mes derniers projets
            </h2>
            <div className="slider-project">
                <img className="img-slider" src={dataProjets[currentIndex].image} alt="" />
                    {dataProjets.length > 1 ? (
                        <div className="change-project">
                            <button className="button-link">
                                En savoir plus
                                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                            </button>
                            <div className="dots">
                                {dataProjets.map((projet, index) => (
                                <div key={index} 
                                    className={index === currentIndex ? "dot active" : "dot"}
                                    onClick={() => goToProject(index)}>
                                </div>
                                ))}
                            </div>
                        </div>
                    ):null }
            </div>
            <div className="play-stop">
                <p className="name-project">
                    {dataProjets[currentIndex].title}
                </p>
                <FontAwesomeIcon className="icon" icon={faCirclePlay} />
                <FontAwesomeIcon className="icon" icon={faCircleStop} />
            </div>
        </div>
     );
}

export default Slider