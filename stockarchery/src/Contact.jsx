import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem; /* Increased width */
        margin: auto;
        padding: 2rem; /* Added padding */
        background-color: ${({ theme }) => theme.colors.background}; /* Optional: Add background color */
        border-radius: 10px; /* Optional: Add border radius */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow */
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; /* Adjusted gap */
        height: auto;
        align-items: center; /* Center align items horizontally */
        justify-content: center; /* Center align items vertically if needed */

        input, textarea {
          padding: 1rem; /* Increased padding */
          border: 1px solid ${({ theme }) => theme.colors.yellow}; /* Optional: Add border color */
          border-radius: 5px; /* Optional: Add border radius */
          font-size: 1rem; /* Adjusted font size */
          width: 100%; /* Ensure inputs take full width of their container */
          max-width: 100%; /* Prevent inputs from exceeding container width */
        }

        textarea {
          resize: vertical; /* Allow vertical resizing */
          min-height: 200px; /* Ensure a minimum height for the textarea */
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.3s; /* Slightly slower transition */
          padding: 1rem; /* Increased padding */
          background-color: ${({ theme }) => theme.colors.yellow};
          color: #fff;
          border: 2px solid ${({ theme }) => theme.colors.yellow}; /* Fixed border property */
          font-size: 1.2rem; /* Adjusted font size */
          width: 100px; /* Set width to auto to adjust based on content */
          max-width: 200px; /* Optional: Limit maximum width of the button */
          text-align: center; /* Center text inside button */
          margin-top: 1rem; /* Add top margin to space it from other elements */

          &:hover {
            background-color: ${({ theme }) => theme.colors.yellow};
            border: 2px solid ${({ theme }) => theme.colors.yellow};
            transform: scale(1.05); /* Slightly larger scale on hover */
          }
        }
      }
    }

    iframe {
      border: 0;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mzzpddag"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Your message"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

