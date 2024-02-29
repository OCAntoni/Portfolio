import Img from "../../assets/images/meadow_mountain.webp"

function About() {
    return (
        <section id="about">
            <h2>
                A Propos de moi
            </h2>
            <div className="about">
                <img 
                    className="img-about"
                    src={Img}  
                    alt="prairie avec une montagne enneieger en fond"
                />
                <div className="text-about" style={{ lineHeight: '1.5' }}>
                    <p>
                        Durant mes précédentes expériences professionelles, j'ai eu l'opportunité d'explorer plusieurs domaines. C'est ce qui me permet d'aborder chaque nouveau projet avec enthousiasme tout en saisissant les enjeux. Je dispose également d'une capacité d'écoute qui est un élément primordial pour mener à bien mes differents projets. Ainsi je serai en mesure de comprendre les besoins de mes clients.
                        Mon intérêt pour la tech et l'informatique se traduit par ma passion pour le développement web et la construction de solution digitale.
                    </p>
                    <p>
                        Je me suis naturellement tourné vers une formation de 9 mois avec Openclassrooms, qui m'a permis d'acquérir de nouvelles compétences, notamment de nouveaux outils de développement. Cette formation entièrement à distance a pu renforcer mon autonomie et mon aptitude à naviguer seul dans le domaine du développement.
                    </p>
                    <p>
                        N'hésitez pas à explorer mon portfolio plus en détails ou à me contacter, je suis toujours ouvert à de nouvelles collaborations ainsi qu'à de nouvelles opportunités.
                    </p>
                    <div className="download">
                        <a href={process.env.PUBLIC_URL + '/cv_test.pdf'} download="CV_Castagne_Antoni.pdf">
                            <button className="dl-button">
                                Télécharger CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About