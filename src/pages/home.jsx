import Header from "../components/header/header"
import Project from "../components/news/news"
import About from "../components/about/about"
import Footer from "../components/footer/footer"
import Scroll from "../components/scroll/scroll"
import "../scss/main.scss"

function Home() {
    return (
        <>
            <Header />
            <Project />
            <About />
            <Footer />
            <Scroll /> 
        </>
    )
}

export default Home