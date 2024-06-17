import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.4em 1.2em;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 200ms all ease;

  &:hover {
  box-shadow: none;
  }

`;


const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <ButtonElement>{children}</ButtonElement>
  )
}

export default Button