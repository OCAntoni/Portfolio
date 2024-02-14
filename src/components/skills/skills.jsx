import dataSkills from '../../data/skills.json'

function Skills() {

    return (
        <div id="skills">
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
    )
}

export default Skills