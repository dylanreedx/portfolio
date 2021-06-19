import React from "react"
import styled from "styled-components"
import { pageAnimation } from "../../animation"

import profilePicture from "../../Assets/images/blob-avi.png"
import headerBg from "../../Assets/images/contact-header.svg"
import headerBgLg from "../../Assets/images/header-bg-lg.svg"
import Button from "../../components/Button"
import { Section } from "../../styles"

const index = () => {
  return (
    <StyledContact
      initial="hidden"
      variants={pageAnimation}
      animate="show"
      className="intro"
    >
      <StyledCard className="card">
        <StyledContactHeader className="header" bg={headerBg} bgLg={headerBgLg}>
          <img
            className="profile-pic"
            src={profilePicture}
            alt="profile picture of Dylan Reed"
          />
        </StyledContactHeader>
        <div className="info-wrapper">
          <div className="info">
            <div className="title">
              <h2>Contact</h2>
              <p>Let's Work together! Contact me for any inquiries.</p>
            </div>
          </div>
          <StyledForm className="form">
            <form
              name="contact-form"
              className="form"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                id="content"
                name="content"
                placeholder="Content"
                required
              />
              <SubmitBtn>
                <button type="submit" className="submit">
                  Send
                </button>
                <Button to={"/"} style={{ padding: "0" }}>
                  Return back home
                </Button>
              </SubmitBtn>
            </form>
          </StyledForm>
        </div>
      </StyledCard>
    </StyledContact>
  )
}

const StyledContact = styled(Section)`
  min-height: 100vh;
`

const StyledCard = styled.div`
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;

  .title {
    h2 {
      text-transform: uppercase;
      font-size: 2.725em;
    }
  }

  @media screen and (min-width: 1040px) {
    flex-direction: row-reverse;
  }

  .info-wrapper {
    flex: 2;
    padding: 2em;
  }
`

const StyledContactHeader = styled.div`
  background-image: url(${(p) => p.bg});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  /* display: grid;
  place-items: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1.5;

  @media only screen and (min-width: 1040px) {
    background-image: url(${(p) => p.bgLg});

    .profile-pic {
      padding: 15em 0;
    }
  }

  .profile-pic {
    max-width: 75%;
    object-fit: cover;
  }
`

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 0;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media screen and (min-width: 1040px) {
      .submit {
        width: 50%;
      }
    }

    input,
    textarea {
      padding: 1.5em 1em;
      outline: none;
      border: 1px solid ${(p) => p.theme.colors.lightGray};
      border-radius: 0.5em;
      transition: 300ms;
      position: relative;
      font-family: "Poppins", sans-serif;

      &:focus {
        border-color: ${(p) => p.theme.colors.accBlue};
      }
    }

    .submit {
      padding: 1em 2em;
      background: ${(p) => p.theme.colors.accBlue};
      color: #fff;
      outline: 0;
      border: none;
      border-radius: 0.5em;
      cursor: pointer;
      transition: 300ms;
      font-weight: 700;
      font-size: 1.125em;
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;

      &:hover,
      &:focus {
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.051),
          0 6.7px 5.3px rgba(0, 0, 0, 0.073), 0 12.5px 10px rgba(0, 0, 0, 0.09),
          0 22.3px 17.9px rgba(0, 0, 0, 0.107),
          0 41.8px 33.4px rgba(0, 0, 0, 0.129),
          0 100px 80px rgba(0, 163, 228, 0.2);
        background: #008ac0;
      }
    }
  }
`

const SubmitBtn = styled.div`
  .submit {
    padding: 1em 2em;
    background: ${(p) => p.theme.colors.accBlue};
    color: #fff;
    outline: 0;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 300ms;
    font-weight: 700;
    font-size: 1.125em;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;

    &:hover,
    &:focus {
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.051),
        0 6.7px 5.3px rgba(0, 0, 0, 0.073), 0 12.5px 10px rgba(0, 0, 0, 0.09),
        0 22.3px 17.9px rgba(0, 0, 0, 0.107),
        0 41.8px 33.4px rgba(0, 0, 0, 0.129),
        0 100px 80px rgba(0, 163, 228, 0.2);
      background: #008ac0;
    }
  }
`

export default index
