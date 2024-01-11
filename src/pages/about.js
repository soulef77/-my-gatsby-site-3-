// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

// Step 3: Export your component
// Rest of the component...

export const Head = () => <Seo title="About Me" />

export default AboutPage