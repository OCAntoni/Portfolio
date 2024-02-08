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
        <div>
            <img className="img-galery" src={dataProjets[currentIndex-1].image} alt="" />
                {dataProjets.length > 1 ? (
                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandPointLeft} className="arrow arrow-right" onClick={()=> back()}/>
                        <FontAwesomeIcon icon={faHandPointRight} className="arrow arrow-left" onClick={() => next()}/>
                    </div>
                    <p className="counter-images">{currentIndex}/{dataProjets.length}</p>
                </div>
             ):null }
        </div>
     );
}

export default Slider