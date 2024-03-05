import dataSkills from '../../data/skills.json'

function Skills() {

    return (
        <section id="skills">
            <h2 className='section-title'>
                Mes compétences
            </h2>
            <div className="skills">
                {dataSkills.map((skill,index) => (
                    <div key={index}>
                        <img 
                            src={skill.image} 
                            className='skills-logo' 
                            alt={`Logo ${skill.title}`} 
                        />
                        <p>
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
            <div className='quality-lists'>
                    <ul className='list'>
                        <li>
                            <span className='dot'></span>
                            Référencement naturel
                        </li>
                        <li>
                            <span className='dot'></span>
                            Green code
                        </li>
                        <li>
                            <span className='dot'></span>
                            Accessibilité
                        </li>
                    </ul>
                    <ul className='list'>
                        <li>
                            <span className='dot'></span>
                            Autonome
                        </li>
                        <li>
                            <span className='dot'></span>
                            Consciencieux
                        </li>
                        <li>
                            <span className='dot'></span>
                            Empathique
                        </li>
                    </ul>
                </div>
        </section>
    )
}

export default Skills