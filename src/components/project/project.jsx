import React, { useState } from 'react';
import dataProjets from '../../data/data.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Project() {
    const [filteredProjects, setFilteredProjects] = useState(dataProjets); //init a local state with all the projects
    const [selectedFilter, setSelectedFilter] = useState('Tous'); // init an other local state with the basic filter with the character string

    const filterProjects = (filter) => {
        setSelectedFilter(filter); // update state with the valor selected
        if (filter === 'Tous') {
            setFilteredProjects(dataProjets); // if tous is selected all projects are displayed
        } else { // if tous is not selected, use method filter and update local state
            const filtered = dataProjets.filter(project => project.filtre.includes(filter));
            setFilteredProjects(filtered);
        }
    };

    return (
        <section id="works">
            <h2>
                Mes projets
            </h2>
            <div className='filters'>
                <button className={`filter-button ${selectedFilter === 'Tous' ? 'active-color' : ''}`} onClick={() => filterProjects('Tous')}>Tous</button>
                <button className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`} onClick={() => filterProjects('Html/Css')}>HTML/CSS</button>
                <button className={`filter-button ${selectedFilter === 'Javascript' ? 'active-color' : ''}`} onClick={() => filterProjects('Javascript')}>Javascript</button>
                <button className={`filter-button ${selectedFilter === 'ReactJS' ? 'active-color' : ''}`} onClick={() => filterProjects('ReactJS')}>ReactJS</button>
                <button className={`filter-button ${selectedFilter === 'SEO' ? 'active-color' : ''}`} onClick={() => filterProjects('SEO')}>SEO</button>
                <button className={`filter-button ${selectedFilter === 'Debug' ? 'active-color' : ''}`} onClick={() => filterProjects('Debug')}>Debug</button>
            </div>
            <div className='filters-mobile'>
                <label htmlFor="filters-select">Choix des catégories</label>
                <select name="filters" id="filters-select" onChange={(e) => filterProjects(e.target.value)}>
                    <option value="Tous" className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`}>Tous</option>
                    <option value="Html/Css" className={`filter-button ${selectedFilter === 'Html/Css' ? 'active-color' : ''}`}>HTML/CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="ReactJS">ReactJS</option>
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
                                        <FontAwesomeIcon className='fa' icon={faGithub} />
                                    </a>
                                    {project.urlWebsite && (
                                        <a href={project.urlWebsite} target='_blank' rel="noreferrer" >
                                            Voir la page 
                                            <FontAwesomeIcon className='fa' icon={faGlobe} />
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
                                <h3 className='info-title'>
                                    {project.title}
                                </h3>
                                <p className='info-text' style={{ lineHeight: '1.5' }}>
                                    {project.description}
                                </p>
                                <p className='info-text' style={{ lineHeight: '1.5' }}>
                                    {project.description2}
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