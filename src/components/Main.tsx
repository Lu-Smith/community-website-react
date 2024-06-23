import React from 'react';
import styled from 'styled-components';
import content from '../assets/content';
import { motion } from "framer-motion";

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
  color: #596e79;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: black;
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
          <motion.div
             key={index}
             initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
           >
            <SectorComponent role='sector'>
              {!(index % 2)  ? 
              <motion.div
                initial={{ rotate: 0  }}
                whileHover={{ rotate: -30 }}
                transition={{ duration: 1 }}
              >
                <Image src={cont.img} alt='sector' role='image' />
              </motion.div>
              
              :
              ''
              }
              <ContentContainer>
                <Title role='title'>
                  {cont.title}
                </Title>
                <Content role='content'>
                  {cont.content}
                </Content>
              </ContentContainer>
              {index % 2 ? 
               <motion.div
                initial={{ rotate: 0  }}
                whileHover={{ rotate: 30 }}
                transition={{ duration: 1 }}
              >
                <Image src={cont.img} alt='sector' role='image' />
              </motion.div>
              :
              ''
              }
            </SectorComponent>
          </motion.div>
        ))}
    </Wrapper>
  )
}

export default Main