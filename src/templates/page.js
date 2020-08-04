import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import HeroMain from "../components/HeroMain/HeroMain"
import FeaturedOn from "../components/FeaturedOn/FeaturedOn"
import TextWithImage from "../components/TextWithImage/TextWithImage"
import SimpleProcess from "../components/SimpleProcess/SimpleProcess"
import Faqs from "../components/Faqs/Faqs"
import ImageSection from "../components/ImageSection/ImageSection"
import QuizSurvey from "../components/QuizSurvey/QuizSurvey"
import TextCenter from "../components/TextCenter/TextCenter"
import OneTwoThree from "../components/OneTwoThree/OneTwoThree"
import OurServices from "../components/OurServices/OurServices"
import Blog from "../components/Blog/Blog"
import TextImageCountry from "../components/TextImageCountry/TextImageCountry"
import FeaturedLine from "../components/FeaturedLine/FeaturedLine"
// import ResultBlock from "../components/ResultBlock/ResultBlock"
import ResultBlock2 from "../components/ResultBlock/ResultBlock2"
import OurFeatures from "../components/OurFeatures/OurFeatures"
import TextImageBigTitle from "../components/TextImageBigTitle/TextImageBigTitle"
import ThankYou from "../components/ThankYou/ThankYou"

import TopLineText from "../components/TopLineText/TopLineText"

import YourDetailsForm from "../components/YourDetailsForm/YourDetailsForm"
import YourDetailsSteps from "../components/YourDetailsSteps/YourDetailsSteps"
import CustomFooter from "../components/CustomFooter/CustomFooter"

const Page = ({ data, location }) => {
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
            return (
              <SimpleProcess
                path={location.pathname}
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Image":
            return <ImageSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_QuizSurvey":
            return <QuizSurvey key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_TextCenter":
            return <TextCenter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_OneTwoThree":
            return (
              <OneTwoThree path={location.pathname} key={index} {...section} />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_OurServices":
            return (
              <OurServices path={location.pathname} key={index} {...section} />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Blog":
            return <Blog path={location.pathname} key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_TextImageCountry":
            return (
              <TextImageCountry
                path={location.pathname}
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_FeaturedLine":
            return (
              <FeaturedLine path={location.pathname} key={index} {...section} />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_ResultBlock":
            return (
              <ResultBlock2
                location={location}
                path={location.pathname}
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_OurFeatures":
            return <OurFeatures key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_TextImageBigTitle":
            return <TextImageBigTitle key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_ThankYou":
            return <ThankYou key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_TopLineText":
            return <TopLineText key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_YourDetailsForm":
            return <YourDetailsForm key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_YourDetailsSteps":
            return <YourDetailsSteps key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_CustomFooter":
            return <CustomFooter key={index} {...section} />

          default:
            return ""
        }
      })}
    </Layout>
  )
}

export default Page

export const pageQ = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id, idType: ID) {
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
            ...QuizSurvey
            ...TextCenter
            ...OneTwoThree
            ...OurServices
            ...Blog
            ...TextImageCountry
            ...FeaturedLine
            ...ResultBlock
            ...OurFeatures
            ...TextImageBigTitle
            ...ThankYou
            ...TopLineText
            ...YourDetailsForm
            ...YourDetailsSteps
            ...CustomFooter
          }
        }
      }
    }
  }
`
