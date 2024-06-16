import React from 'react';
import styled from 'styled-components';
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";
import FooterLink from './support/FooterLink';

const SocialMediaContainer = styled.div`
  background-color: yellow;
  color: white;
`;

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaContainer>
      <FooterLink href="//www.facebook.com/lunasmithart" target="_blank" aria-label="Facebook page">
        <FaFacebook />
      </FooterLink>
      <FooterLink href="//twitter.com/LuArtGallery" target="_blank" aria-label="Twitter page">
        <FaTwitter />
      </FooterLink>
      <FooterLink href="//www.instagram.com/luartgallery" target="_blank" aria-label="Instagram page">
        <FaInstagram />
      </FooterLink>
    </SocialMediaContainer>
  )
}

export default SocialMedia