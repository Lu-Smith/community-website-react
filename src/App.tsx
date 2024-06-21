import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #dfd3c3;
`;

const App = () => {

  return (
    <AppWrapper>
      <div><Header /></div>
      <div><Main /></div>
      <div><Footer /></div>
    </AppWrapper>
  )
}

export default App
