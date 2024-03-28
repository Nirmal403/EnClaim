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
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* Other routes... */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
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
