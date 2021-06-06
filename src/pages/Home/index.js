import React from "react"
import AboutSection from "./AboutSection"

import Hero from "./Hero"
import RecentProjectsSection from "./RecentProjectsSection"
import StepSection from "./StepSection"

const index = () => {
  return (
    <div>
      <Hero />
      <RecentProjectsSection />
      <AboutSection />
      {/* <StepSection /> */}
    </div>
  )
}

export default index
