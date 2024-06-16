import React from 'react';
import styled from 'styled-components';

const HelpersWrapper = styled.section`
  padding: 4em;
  background: white;
  color: purple;
`;

const FooterHelpers: React.FC = () => {
  return (
    <HelpersWrapper>FooterHelpers</HelpersWrapper>
  )
}

export default FooterHelpers