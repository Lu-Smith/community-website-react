import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import FooterLink from './support/FooterLink';
import FooterHelpers from './FooterHelpers';

const FooterWrapper = styled.section`
  width: 100vw;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterText = styled.h4`
  font-size: 14px;
  padding: 1em  0;
  color: #596e79; 
  font-family: "Playwrite US Modern", cursive;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper role='footer'>
      <SocialMedia />
      <FooterHelpers />
      <FooterText>
        Coded by
        <FooterLink href='https://www.lunasmithart.com' target='_blank'>Luna Smith</FooterLink>
        , open-source on
        <FooterLink href='https://github.com/Lu-Smith/community-website-react' target='_blank'>GitHub</FooterLink>.
      </FooterText>
    </FooterWrapper>
  )
}

export default Footer