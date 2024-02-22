import dataProjets from '../../data/data.json'

function Project() {
    return (
        <section id="works">
            <h3>
                Mes projets
            </h3>
            <div className="works-container">
                {dataProjets.map((project, index) => {
                    return (
                        <div className="work" key={index}>
                            <div className='test'>
                                <div className="link-container">
                                    <a href={project.urlCode} target='_blank' rel="noreferrer" >
                                        Voir le code 
                                    </a>
                                    {project.urlWebsite && (
                                        <a href={project.urlWebsite} target='_blank' rel="noreferrer" >
                                            Voir la page 
                                        </a>
                                    )}
                                </div>
                                <img 
                                    className="work-img"
                                    src={project.image} 
                                    alt={`Projet ${project.title}`}   
                                />
                            </div>
                            <div className='work-info'>
                                <h4 className='info-title'>
                                    {project.title}
                                </h4>
                                <p className='info-text' style={{ lineHeight: '1.5' }}>
                                    {project.description}
                                </p>
                                <div className='tags'>
                                    <p className='tag'>
                                        {project.tag}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Project