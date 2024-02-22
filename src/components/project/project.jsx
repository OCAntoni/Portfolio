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
                                <h4>
                                    {project.title}
                                </h4>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Project