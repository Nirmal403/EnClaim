import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import AboutOurFounder from './components/AboutOurFounder';
import About from './components/About';
import EnclaimPartners from './components/EnclaimPartners';
import EnclaimUsers from './components/EnclaimUsers';
import EnclaimAssociates from './components/EnclaimAssociate';
import DesignationOfAssociates from './components/DesignationOfAssociates';
import TheTimeline from './components/TheTimeline';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
     <Header/>
     <About/>
     <AboutOurFounder/>
     <EnclaimPartners/>
     <EnclaimUsers/>
     <EnclaimAssociates/>
     <DesignationOfAssociates/>
     <TheTimeline/>
    </div>
    </ChakraProvider>
  );
}

export default App;
