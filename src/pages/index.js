import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import HeroMain from "../components/HeroMain/HeroMain"
import FeaturedOn from "../components/FeaturedOn/FeaturedOn"
import TextWithImage from "../components/TextWithImage/TextWithImage"
import SimpleProcess from "../components/SimpleProcess/SimpleProcess"
import Faqs from "../components/Faqs/Faqs"
import ImageSection from "../components/ImageSection/ImageSection"

const Home = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  const showMenu = data.wpgraphql.page.sectionFields.showMenu
  const showFooter = data.wpgraphql.page.sectionFields.showFooter

  return (
    <Layout showFooter={showFooter} showMenu={showMenu} location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_HeroMain":
            return <HeroMain key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_FeaturedOn":
            return <FeaturedOn key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_TextWithImage":
            return <TextWithImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_SimpleProcess":
            return <SimpleProcess key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Image":
            return <ImageSection key={index} {...section} />

          default:
            return ""
        }
      })}
    </Layout>
  )
}

export default Home

export const homeQ = graphql`
  query {
    wpgraphql {
      page(id: "home", idType: URI) {
        id
        featuredImage {
          node {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        title
        slug
        modified
        date
        seo {
          title
          metaDesc
        }
        sectionFields {
          showMenu
          showFooter
          sections {
            ...HeroMain
            ...FeaturedOn
            ...TextWithImage
            ...SimpleProcess
            ...Faqs
            ...ImageSection
          }
        }
      }
    }
  }
`
