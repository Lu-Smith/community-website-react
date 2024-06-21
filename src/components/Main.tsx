import React from 'react';
import styled from 'styled-components';
import content from '../assets/content';

const Wrapper = styled.section`
  padding: 1em;
  background: #dfd3c3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SectorComponent = styled.div`
  background-color: #f0ece2;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 300px;
`;

const ContentContainer = styled.div`
  align-text: left;
  flex: 2;
`;

const Title = styled.h2`
  color: black;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: red;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  flex: 1;
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