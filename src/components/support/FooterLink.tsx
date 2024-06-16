import React from 'react';
import styled from 'styled-components';

const FooterLinkElement = styled.a`
  background: green;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.4em 1.2em;

  &:hover {
    background: black;
  }
`;

interface FooterLinkProps {
  href: string;
  target: string;
  children: React.ReactNode;
  role?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, target, children, role }) => {
  return (
    <FooterLinkElement href={href} target={target} role={role}>
      {children}
    </FooterLinkElement>
  )
}

export default FooterLink