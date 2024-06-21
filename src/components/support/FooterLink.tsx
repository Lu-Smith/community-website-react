import React from 'react';
import styled from 'styled-components';

const FooterLinkElement = styled.a`
  color: #596e79; 
  padding: 0.4em 0.5em;
  text-decoration: none;
  transition: 200ms all ease;

  &:hover {
    color: black; 
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