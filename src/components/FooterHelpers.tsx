import React from 'react';
import styled from 'styled-components';

const HelpersWrapper = styled.div`
  padding: 4em;
  background: white;
  color: purple;
`;

const ContactContainer = styled.ul`
  padding: 4em;
  background: white;
  color: purple;
`;

const ContactLi = styled.li`
  background: yellow;
  color: purple;
`;

const HelpersContainer = styled.ul`
  padding: 4em;
  background: white;
  color: purple;
`;

const ListLi = styled.li`
  background: yellow;
  color: purple;
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