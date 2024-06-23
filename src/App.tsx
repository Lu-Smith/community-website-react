import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from 'styled-components';
import { motion } from "framer-motion";

const AppWrapper = styled.div`
  background: #dfd3c3;
  overflow-x: hidden;
`;

const App = () => {

  return (
    <AppWrapper>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      >
        <Header />
      </motion.div>
      <div><Main /></div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ><Footer /></motion.div>
    </AppWrapper>
  )
}

export default App
