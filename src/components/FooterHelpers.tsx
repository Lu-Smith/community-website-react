import React from 'react';
import styled from 'styled-components';

const HelpersWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #f0ece2; 
  background: #596e79;
`;

const ContactContainer = styled.ul`
  list-style: none;
  text-align: center;
`;

const ContactLi = styled.li`
  padding: 0.2em 0;
  transition: 200ms all ease;
  cursor: pointer;

  &:hover {
    color: black; 
  }
`;

const HelpersContainer = styled.ul`
  padding: 1em;
  list-style: none;
  text-align: center;
`;

const ListLi = styled.li`
  color: #f0ece2;
  transition: 200ms all ease;
  cursor: pointer;

  &:hover {
    color: black; 
  }
`;

const FooterHelpers: React.FC = () => {
  return (
    <HelpersWrapper>
      <ContactContainer data-testid='contactContainer'>
        <ContactLi role='contactLink'>Contact us</ContactLi>
        <ContactLi data-testid='phoneNumber'>+1-543-123-4567</ContactLi>
        <ContactLi data-testid='email'>example@bubble.com</ContactLi>
      </ContactContainer>
      <HelpersContainer data-testid='helpersContainer'>
        <ListLi role='homeLink'>About Us</ListLi>
        <ListLi role='faqLink'>FAQ</ListLi>
        <ListLi role='careerLink'>Career</ListLi>
        <ListLi role='blogLink'>Blog</ListLi>
        <ListLi role='supportLink'>Support</ListLi>
      </HelpersContainer>
    </HelpersWrapper>
  )
}

export default FooterHelpers