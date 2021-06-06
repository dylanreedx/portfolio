import styled from "styled-components"

export const Section = styled.section`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 1040px) {
    margin: 0 10em;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 15em;
  }
  @media only screen and (min-width: 1500px) {
    margin: 0 22em;
  }
  @media only screen and (min-width: 1920px) {
    margin: 0 35em;
  }
`
