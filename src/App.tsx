import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const App = () => {
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