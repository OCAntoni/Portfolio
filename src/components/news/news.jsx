import dataProjets from '../../data/data.json'
import Slider from '../slider/slider'

function Project() {
    const projets = dataProjets;

    return (
        <>
           <Slider images={projets} />
        </>
    )
}

export default Project