import React from 'react';
import styled from 'styled-components';
import content from '../assets/content';

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
        {content.map((cont, index) => (
          <SectorComponent role='sector' key={index}>
            <ContentContainer>
              <Title role='title'>
                {cont.title}
              </Title>
              <Content role='content'>
                {cont.content}
              </Content>
            </ContentContainer>
            <Image src={cont.img} alt='sector' role='image' />
          </SectorComponent>
        ))}
    </Wrapper>
  )
}

export default Main