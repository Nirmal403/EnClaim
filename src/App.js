import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutOurFounder from "./components/AboutOurFounder";
import About from "./components/About";
import EnclaimPartners from "./components/EnclaimPartners";
import EnclaimUsers from "./components/EnclaimUsers";
import EnclaimAssociates from "./components/EnclaimAssociate";
import DesignationOfAssociates from "./components/DesignationOfAssociates";
import TheTimeline from "./components/TheTimeline";
import OurVision from "./components/OurVision";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import HeadofAssociate from "./pages/Homepage.jsx/HeadofAssociate";
import { Routes, Route } from "react-router-dom"; 
import { useLocation, useNavigate } from 'react-router-dom';

import { scroller } from 'react-scroll';
import { useEffect } from "react";
function App() {

  const location = useLocation();
  const navigate = useNavigate();

 
  
  useEffect(() => {
    if (location.state?.scrollTo === 'aboutSection') {
      // Perform the scroll
      scroller.scrollTo('aboutSection', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70, // Adjust based on your needs
      });
  
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} });

    }else if (location.state?.scrollTo === 'ourVisionSection') {
      // Perform the scroll
      scroller.scrollTo('ourVisionSection', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70, // Adjust based on your needs
      });
  
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
    else if (location.state?.scrollTo === 'home') {
      // Perform the scroll
      scroller.scrollTo('home', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70, // Adjust based on your needs
      });
  
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
    else if (location.state?.scrollTo === 'Designation') {
      // Perform the scroll
      scroller.scrollTo('Designation', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70, // Adjust based on your needs
      });
  
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);



  return (
    <ChakraProvider>
      <div className="App">
        {/* Other routes... */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id='home'>
                <Header />
                </div>
                <div id="aboutSection">
                  <About />
                </div>
                <AboutOurFounder />
                <EnclaimPartners />
                <EnclaimUsers />
                <EnclaimAssociates />
                <div id='Designation'>  
                <DesignationOfAssociates />
                </div>
                <div id="ourVisionSection">
                  <TheTimeline />
                </div>
                <OurVision />
                <div id="contactSection">
                  <ContactPage />
                </div>
              </>
            }
          />
          <Route path="/headofassociates" element={<HeadofAssociate />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
