
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500">
     
     <NavBar />
      <Home  />
      <SocialLink />
      <About  />
      <Portfolio />
      <Experience />
      <Certificates/>
      <Contact />
     
    </div>
  )
}

export default App
