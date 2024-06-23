import React from 'react';
import styled from 'styled-components';
import Button from './support/Button';
import Community from '../assets/media/community.svg';
import { motion } from "framer-motion";
import { PiPersonArmsSpreadThin } from "react-icons/pi";
import { PiPersonSimpleCircleLight } from "react-icons/pi";


const HeaderWrapper = styled.section`
  padding: 0.2em 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 350px;
  gap: 5px;
`;

const Container = styled.div`
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;

  &.first {
  flex: 3;
  }

  &.second {
  flex: 2;
  }
`;

const Title = styled.h1`
  font-size: 1.8em;
  color: black; 
  text-align: left;
  font-family: "Playwrite US Modern", cursive;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IntroContainer = styled.div`
  text-align: left;
`;

const IntroTitle = styled.h2`
  font-size: 1.3em;
  color: #596e79; 
`;

const IntroContent = styled.p`
  font-size: 1em;
  color: #596e79; 
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper role='header'>
        <Container className='first'>
          <motion.div>
            <Title>
              C
              <motion.div 
              initial={{ scale: 1, y: 5 }}
              whileHover={{ scale: 0.8, y: 20 }}
              transition={{ duration: 0.6 }}>
                <PiPersonSimpleCircleLight />
            </motion.div>
              mmun
              <motion.div 
              initial={{ scale: 1, y: 5 }}
              whileHover={{ scale: 0.8, y: 20 }}
              transition={{ duration: 0.6 }}>
                <PiPersonArmsSpreadThin />
              </motion.div>
              ty Hub
            </Title>
          </motion.div>
          <IntroContainer>
              <IntroTitle>Build The Community Your Fans Will Love</IntroTitle>
              <IntroContent>The Community Hub re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</IntroContent>
          </IntroContainer>
          <Button>Get started</Button>
        </Container>
        <Container className='second'>
            <Button>Try it For Free</Button>
            <Image src={Community} alt="intro" />
        </Container>
    </HeaderWrapper>
  )
}

export default Header