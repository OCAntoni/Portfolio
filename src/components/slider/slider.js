import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'

function Slider({images}) {
    const [currentIndex , setCurrentIndex]= useState(1);

    function back() {
        (currentIndex === 1) ? setCurrentIndex(currentIndex + (images.length-1)) : setCurrentIndex(currentIndex - 1);
    }

    function next() {
        (currentIndex === images.length) ? setCurrentIndex(currentIndex - (images.length-1)) : setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            <img className="img-galery" src={images[currentIndex-1]} alt="" />
                {images.length > 1 ? (
                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandPointLeft} className="arrow arrow-right" onClick={()=> back()}/>
                        <FontAwesomeIcon icon={faHandPointRight} className="arrow arrow-left" onClick={() => next()}/>
                    </div>
                    <p className="counter-images">{currentIndex}/{images.length}</p>
                </div>
             ):null }
        </div>
     );
}

export default Slider