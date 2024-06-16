import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import FooterLink from './support/FooterLink';

const FooterWrapper = styled.section`
  padding: 4em;
  background: red;
`;

const FooterText = styled.h4`
  padding: 2em 4em;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper role='footer'>
      <SocialMedia />
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