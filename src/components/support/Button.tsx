import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
	background: #596e79;
  color: #f0ece2;
  font-size: 0.8em;
  padding: 0.8em 1.2em;
  margin: 0.5em;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 200ms all ease;

  &:hover {
    box-shadow: none;
    background: black;
  }

`;


const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <ButtonElement>{children}</ButtonElement>
  )
}

export default Button