import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const SectorComponent = styled.div`
  background-color: grey;
`;

const Title = styled.h2`
  color: grey;
`;

const Content = styled.p`
  color: red;
`;


const Main: React.FC = () => {
  return (
    <Wrapper role='main'>
      <SectorComponent role='sector'>
        <Title role='title'>
          Grow Together
        </Title>
        <Content role='content'>
        Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
        </Content>
      </SectorComponent>
    </Wrapper>
  )
}

export default Main