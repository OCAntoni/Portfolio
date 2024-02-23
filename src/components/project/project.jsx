import React, { useState } from 'react';
import dataProjets from '../../data/data.json'

function Project() {
    const [filteredProjects, setFilteredProjects] = useState(dataProjets);
    const [selectedFilter, setSelectedFilter] = useState('Tous');

    const filterProjects = (filter) => {
        setSelectedFilter(filter);
        if (filter === 'Tous') {
            setFilteredProjects(dataProjets); 
        } else {
            const filtered = dataProjets.filter(project => project.filtre.includes(filter));
            setFilteredProjects(filtered);
        }
    };

    return (
        <section id="works">
            <h3>
                Mes projets
            </h3>
            <div className='filters'>
                <button className={`filter-button ${selectedFilter === 'Tous' ? 'active-color' : ''}`} onClick={() => filterProjects('Tous')}>Tous</button>
                <button className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`} onClick={() => filterProjects('Html/Css')}>HTML/CSS</button>
                <button className={`filter-button ${selectedFilter === 'Javascript' ? 'active-color' : ''}`} onClick={() => filterProjects('Javascript')}>Javascript</button>
                <button className={`filter-button ${selectedFilter === 'React' ? 'active-color' : ''}`} onClick={() => filterProjects('React')}>React</button>
                <button className={`filter-button ${selectedFilter === 'SEO' ? 'active-color' : ''}`} onClick={() => filterProjects('SEO')}>SEO</button>
                <button className={`filter-button ${selectedFilter === 'Debug' ? 'active-color' : ''}`} onClick={() => filterProjects('Debug')}>Debug</button>
            </div>
            <div className='filters-mobile'>
                <label htmlFor="filters-select">Choix des catégories</label>
                <select name="filters" id="filters-select" onChange={(e) => filterProjects(e.target.value)}>
                    <option value="Tous" className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`}>Tous</option>
                    <option value="Html/Css" className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`}>HTML/CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="React">React</option>
                    <option value="SEO">SEO</option>
                    <option value="Debug">Debug</option>
                </select>
            </div>
            <div className="works-container">
                {filteredProjects.map((project, index) => (
                        <div className="work" key={index}>
                            <div className='work-img-hover'>
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
                                    {project.tag.map((tag, index) => (
                                        <p className='tag' key={index}>
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Project