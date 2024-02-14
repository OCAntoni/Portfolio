

function About() {
    return (
        < div id="about">
            <h2>
                A Propos
            </h2>
            <p>
                Durant mes précèdentes expériences professionnelles, j'ai eu l'opportunitées d'explorer plusieurs dommaines. C'est ce qui me permet d'aborder chaque nouvelle opportunité avec enthousiasme et compréhension, mais également d'une capacité d'écoute empathique et c'est cette capacité qui me permet de comprendre les besoins des autres.
                Mon intérêt pour la tech et l'informatique se traduit par ma passion pour le développement web et la construction de solution digitale.
            </p>
            <p>
                Je me suis naturellement tourner vers une formation de 9 mois avec Openclassrooms, qui m'a permis d'acquérir de nouvelles compétences, ainsi que de nouveaux outils de développement notamment. Cette formation étant entièrement à distance, a renforcé mon autonomie et ma capacité à naviguer seul dans le domaine du développement.
            </p>
            <p>
                N"hésitez pas à explorer mon protfolio plus en détails ou à me contacter, je suis toujours ouvert à de nouvelles colaborations ainsi qu'à de nouvelles opportunitées.
            </p>
            <div className="donwload">
                <a href={process.env.PUBLIC_URL + '/cv_test.pdf'} download="CV_Castagne_Antoni.pdf">
                    <button>Télécharger CV</button>
                </a>
            </div>
        </div>
    )
}

export default About