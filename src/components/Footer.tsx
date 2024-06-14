import React from 'react';
import { styled } from 'styled-components';

const FooterWrapper = styled.section`
  padding: 4em;
  background: red;
`;

const FooterText = styled.h4`
  padding: 2em 4em;
`;

const FooterLink = styled.a`
  color: black;
  text-decoratins: none;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper role='footer'>
      <FooterText>
        Coded by
        <FooterLink href='https://www.lunasmithart.com' target='_blank'>Luna Smith</FooterLink>
        , open-source on
        <FooterLink href='https://github.com/Lu-Smith/community-website-react' target='_blank'>GitHub</FooterLink>
      </FooterText>
    </FooterWrapper>
  )
}

export default Footer