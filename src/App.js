import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import AboutOurFounder from './components/AboutOurFounder';
import About from './components/About';
import EnclaimPartners from './components/EnclaimPartners';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
     <Header/>
     <About/>
     <AboutOurFounder/>
     <EnclaimPartners/>
    </div>
    </ChakraProvider>
  );
}

export default App;
