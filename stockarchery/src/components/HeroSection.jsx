import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image ,paragraph} = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
             {paragraph}
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Know more </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
   background-color: rgba(37, 37, 37, 255);
  
  
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
  }

  .btn {
    max-width: 16rem;
    background-color: #FDD788;
    border:none;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    color: yellow;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    color:#FDD788;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
      
    }
  }
`;

export default HeroSection;
