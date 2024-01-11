import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://img.freepik.com/photos-gratuite/grande-mosquee-sheikh-zayed-sous-lumiere-du-soleil-ciel-bleu-abu-dhabi-emirats-arabes-unis_181624-48033.jpg?size=626&ext=jpg"
      />
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage