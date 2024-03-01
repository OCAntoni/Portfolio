import { useState, useEffect, useRef } from "react";
import dataProjets from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faCircleStop } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0); // init local state index img on 0
    const [isPlaying, setIsPlaying] = useState(true); // init local state on true for playing the slider
    const reversedDataProjets = [...dataProjets].reverse().slice(0, 5); // reverse all the projects and select the last 5
    const intervalRef = useRef(null); // stock time interval 

    useEffect(() => { // manage the time
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                next();
            }, 3000);
        } else {
            clearInterval(intervalRef.current);
        }
    
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, isPlaying]);

    function next() { // netx img slider
        setCurrentIndex((prevIndex) => (prevIndex === reversedDataProjets.length - 1 ? 0 : prevIndex + 1));
    }

    function goToProject(index) { // go to to the project click
        setCurrentIndex(index); 
    }

    function togglePlay() { // manage the slider to play
        setIsPlaying(true);
    }

    function togglePause() { // manage the slider to off
        setIsPlaying(false);
    }

    return (
        <section id="news">
            <h2 className="section-title">
                Découvrez mes derniers projets
            </h2>
            <div className="slider-project">
                <img className="img-slider" src={reversedDataProjets[currentIndex].image} alt={`projet ${reversedDataProjets[currentIndex].title}`} />
                    {reversedDataProjets.length > 1 ? (
                        <div className="change-project">
                            <a href="#works" title="lien vers la section de tous les projets détaillés">
                                <button className="button-link">
                                    En savoir plus
                                    <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                                </button>
                            </a>
                            <div className="dots">
                                {reversedDataProjets.map((projet, index) => (
                                <div key={index} 
                                    className={index === currentIndex ? "dot active" : "dot"}
                                    onClick={() => goToProject(index)}>
                                </div>
                                ))}
                            </div>
                        </div>
                    ):null }
            </div>
            <div className="play-stop" >
                <p className="name-project">
                    {reversedDataProjets[currentIndex].title}
                </p>
                <div className="icons">
                    <FontAwesomeIcon className={`icon ${isPlaying ? "active-play" : ""}`} icon={faCirclePlay} onClick={togglePlay}  />
                    <FontAwesomeIcon className={`icon ${isPlaying ? "" : "active-stop"}`} icon={faCircleStop} onClick={togglePause} />
                </div>
                <a href="#works" title="lien vers la section de tous les projets détaillés">
                    <button className="button-link-mobile">
                        En savoir plus
                        <FontAwesomeIcon className="icon-mobile" icon={faArrowRightLong} />
                    </button>
                </a>
            </div>
        </section>
     );
}

export default Slider;