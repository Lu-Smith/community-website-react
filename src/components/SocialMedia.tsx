import React from 'react';
import styled from 'styled-components';
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";
import FooterLink from './support/FooterLink';

const SocialMediaContainer = styled.div`
  color: #596e79;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaContainer>
      <FooterLink href="//www.facebook.com/lunasmithart" target="_blank" aria-label="Facebook page" role="facebook" >
        <FaFacebook />
      </FooterLink>
      <FooterLink href="//twitter.com/LuArtGallery" target="_blank" aria-label="Twitter page" role="twitter" >
        <FaTwitter />
      </FooterLink>
      <FooterLink href="//www.instagram.com/luartgallery" target="_blank" aria-label="Instagram page" role="instagram" >
        <FaInstagram />
      </FooterLink>
    </SocialMediaContainer>
  )
}

export default SocialMedia