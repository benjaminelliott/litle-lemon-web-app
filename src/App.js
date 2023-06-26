import * as React from 'react'


import { ChakraProvider, Container } from '@chakra-ui/react'

import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <ChakraProvider className="App">
      <Header></Header>
      <Container as="section" maxWidth="xxl" pl="125px"  pr="125px">
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
      </Container>
    </ChakraProvider>
  );
}

export default App;