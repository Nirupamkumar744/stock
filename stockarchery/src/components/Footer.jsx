import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"; // Import the necessary icons

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="contact-text">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/Contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Stock Archery</h3>
            <a href="/about"><p>Bihar First Trading Floor.</p></a>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Feel Free to Contact us</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaLinkedin className="icons" /> {/* LinkedIn icon */}
              </div>
              <div>
                <a href="https://www.instagram.com/stock.archery/?hl=en"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="icons" /></a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@stock.archery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
              <div>
                <a href="https://x.com/stockarchery"
                target="_blank"
                rel="noopener noreferrer"><FaTwitter className="icons" /> {/* Twitter icon */}</a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 7766066032</h3>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} StockArchery. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #FDD788;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #FDD788;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          button {
            background-color: #FDD788;
            color: #000;
            border: none;
            padding: 1rem 2rem;
          }
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({ theme }) => theme.colors.yellow};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.yellow};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #FDD788;

        .icons {
          color: #FDD788;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="email"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 2px solid ${({ theme }) => theme.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #FDD788;
          background-color: #FDD788;
          color: #000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #FDD788;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
