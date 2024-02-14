import { useState } from "react"

import dataProjets from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'

function Slider({images}) {
    const [currentIndex , setCurrentIndex]= useState(1);
    console.log(dataProjets);

    function back() {
        (currentIndex === 1) ? setCurrentIndex(currentIndex + (dataProjets.length-1)) : setCurrentIndex(currentIndex - 1);
    }

    function next() {
        (currentIndex === dataProjets.length) ? setCurrentIndex(currentIndex - (dataProjets.length-1)) : setCurrentIndex(currentIndex + 1);
    }

    return (
        <div id="news">
            <h2>News</h2>
            <div className="slider-project">
                <img className="img-slider" src={dataProjets[currentIndex-1].image} alt="" />
                    {dataProjets.length > 1 ? (
                    <div className="change-project">
                        <FontAwesomeIcon icon={faHandPointLeft} className="change hand-right" onClick={()=> back()}/>
                        <FontAwesomeIcon icon={faHandPointRight} className="change hand-left" onClick={() => next()}/>
                        <h3>
                            {dataProjets[currentIndex-1].title}
                        </h3>
                        <p className="counter-images">{currentIndex}/{dataProjets.length}</p>
                    </div>
                ):null }
            </div>
        </div>
     );
}

export default Slider