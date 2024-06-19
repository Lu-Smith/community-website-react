import React from 'react';
import styled from 'styled-components';
import Data from '../assets/media/data.svg';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SectorComponent = styled.div`
  background-color: grey;
`;

const ContentContainer = styled.div`
  background-color: grey;

`;

const Title = styled.h2`
  color: black;
`;

const Content = styled.p`
  color: red;
`;

const Image = styled.img`
  width: 300px;
`;


const Main: React.FC = () => {
  return (
    <Wrapper role='main'>
      <SectorComponent role='sector'>
        <ContentContainer>
          <Title role='title'>
            Grow Together
          </Title>
          <Content role='content'>
            Generate  meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
          </Content>
        </ContentContainer>
        <Image src={Data} alt='sector' role='image' />
      </SectorComponent>
    </Wrapper>
  )
}

export default Main