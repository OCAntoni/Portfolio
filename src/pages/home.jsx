import Header from "../components/header/header"
import News from "../components/news/news"
import About from "../components/about/about"
import Skills from "../components/skills/skills"
import Project from "../components/project/project"
import Footer from "../components/footer/footer"
import Scroll from "../components/scroll/scroll"
import "../scss/main.scss"

function Home() {
    return (
        <>
            <Header />
            <News />
            <About />
            <Skills />
            <Project />
            <Scroll /> 
            <Footer />
        </>
    )
}

export default Home