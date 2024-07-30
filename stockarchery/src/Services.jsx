import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { Button } from "./styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description, read_more } = curElem; // Assuming 'link' contains the URL from the API
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={read_more} target="_blank" rel="noopener noreferrer">
                  <Button className="btn">Read More</Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: #252525;
  

  .container {
    max-width: 120rem;
  }
    h2{
    color: #FDD788;
    }

  .card {
    border: 0.5rem solid rgb(170 170 170 / 40%);
    color:#fdbe11;

    

    
    }

    .card-data {
      padding: 0 2rem;
      
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid #f2cc7b;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f2cc7b;
      font-size: 1.4rem;

      &:hover {
        background-color: #f2cc7b;
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
