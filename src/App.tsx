import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from 'styled-components';
import { motion } from "framer-motion";
import Button from "./components/support/Button";

const AppWrapper = styled.div`
  background: #dfd3c3;
  overflow-x: hidden;
  text-align: center;
`;

const App = () => {

  const handleScrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppWrapper>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      >
        <Header id='top' />
      </motion.div>
      <div><Main /></div>
      <div>
        <Button onClick={handleScrollToTop}>
          Scroll
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Footer />
      </motion.div>
     
    </AppWrapper>
  )
}

export default App
