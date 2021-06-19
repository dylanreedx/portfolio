import styled from "styled-components"
import { motion } from "framer-motion"

export const Section = styled(motion.section)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    padding: 0 8em;
  }
  @media only screen and (min-width: 1500px) {
    padding: 0 10em;
  }
  @media only screen and (min-width: 1920px) {
    padding: 0 12em;
  }
`
