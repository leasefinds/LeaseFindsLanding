import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import useScript from "../hooks/useScript"

import styles from "./QuizSurvey.module.scss"

export const fragment = graphql`
  fragment QuizSurvey on WPGraphQL_Page_Sectionfields_Sections_QuizSurvey {
    id
    title
    textBlue
    textNormal
    textYellow
    dataQuiz
  }
`

const QuizSurvey = ({
  id,
  title,
  textBlue,
  textNormal,
  textYellow,
  dataQuiz,
}) => {
  // console.log(dataQuiz)

  return (
    <section id={id ? id : null} className={styles.Section}>
      <Container>
        <Row className={styles.Row}>
          <Col className={styles.WrapperCol}>
            <div
              className={styles.Title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
            {textBlue ? (
              <div
                className={styles.TextBlue}
                dangerouslySetInnerHTML={{ __html: textBlue }}
              ></div>
            ) : null}

            {textNormal ? (
              <div
                className={styles.TextNormal}
                dangerouslySetInnerHTML={{ __html: textNormal }}
              ></div>
            ) : null}

            {textYellow ? (
              <div
                className={styles.TextYellow}
                dangerouslySetInnerHTML={{ __html: textYellow }}
              ></div>
            ) : null}

            <div className={styles.Survey}>
              {dataQuiz ? (
                <div
                  className="quiz-container"
                  style={{ textAlign: "center" }}
                  data-quiz={dataQuiz}
                  // "xTdbY6xniCOaeam43pdmKytneSBD7WYkry0EaaM2"
                  // data-preview="true"
                  data-offset="0"
                ></div>
              ) : null}
              {useScript("https://2marketing.leadshook.io/s/js_embed")}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default QuizSurvey
