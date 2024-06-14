import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const Main: React.FC = () => {
  return (
    <Wrapper role='main'>
        Main
    </Wrapper>
  )
}

export default Main