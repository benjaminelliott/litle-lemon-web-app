import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <ChakraProvider>
      <header>
          <meta name="description" content="This is the website for the Little Lemon restaurant"/>
          <meta name="og:title" content="Little Lemon restaurant"/>
          <meta name="og:description" content="The Little Lemon Restaurant specialises in modern Mediterranean cuisine"/>
          <meta name="og:image" content="favicon.ico"/>
          <Navbar />
      </header>
      <div className="App">
        <Main />
      </div>
      <Footer />
    </ChakraProvider>
  );
}

export default App;