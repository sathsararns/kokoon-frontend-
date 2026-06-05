import AboutUsHeader from "../components/AboutUsHeader"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import StatsSection from "../components/StatsSection"
import VisionMission from "../components/VisionMission"

function AboutPage() {
  return (
    <div>
      <Navbar/>
      <AboutUsHeader/>
      <VisionMission/>
      <StatsSection/>
      <Footer/>
    </div>
  )
}

export default AboutPage