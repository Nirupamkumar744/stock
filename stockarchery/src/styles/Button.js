import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: #fdbe11;
  color: #252525;
  padding: 1.4rem 2.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
   box-shadow: 0 2rem 2rem 0 rgba(196, 143, 33, 0.3);

    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #252525;
    font-size: 1.8rem;
    
  }
`;
