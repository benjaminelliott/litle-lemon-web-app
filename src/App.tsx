import * as React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

interface Props {
  Header: React.FC;
  Navbar: React.FC;
  Main: React.FC;
  Footer: React.FC;
}

const App:React.FC<Props> = () => {
  return (
    <ChakraProvider>
      <Header />
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;