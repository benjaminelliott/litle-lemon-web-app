import * as React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { mode } from '@chakra-ui/theme-tools'

function App() {
  return (
    <ChakraProvider className="App">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;