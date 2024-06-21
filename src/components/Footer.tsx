import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import FooterLink from './support/FooterLink';
import FooterHelpers from './FooterHelpers';

const FooterWrapper = styled.section`
  border-radius: 50%;
`;

const FooterText = styled.h4`
  text-align: center;
  margin-top: 0 auto;
  font-size: 14px;
  padding: 1em  0;
  color: #596e79; 
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