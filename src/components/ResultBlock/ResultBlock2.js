import React, { Component } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import queryString from "query-string"
import Timer from "../hooks/timer"
import ResultForm from "./ResultForm/ResultForm"

import StepForm from "./ResultFormStep/StepForm"

import styles from "./ResultBlock.module.scss"

export const fragment = graphql`
  fragment ResultBlock on WPGraphQL_Page_Sectionfields_Sections_ResultBlock {
    id
    title
    formType
    resultText {
      line1
      line2
      line3
      line4
    }
  }
`

class ResultBlock2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
      query: "",
    }
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentDidMount() {
    if (this.props.location.search) {
      this.setState({ query: queryString.parse(this.props.location.search) })
    }

    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  checkReplacement(line, query) {
    let result = line

    if (query.monthly_cost) {
      result = result.replace(
        "[monthly_cost]",
        query.monthly_cost
          ? `<strong>${query.monthly_cost}</strong>`
          : "£1000.00"
      )
    }
    if (query.months_paying) {
      result = result.replace(
        "[months_paying]",
        query.months_paying ? `${query.months_paying}` : "000"
      )
    }

    if (query.deposit) {
      result = result.replace(
        "[deposit]",
        query.deposit ? `<strong>${query.deposit}%</strong>` : "00%"
      )
    }

    if (query.car_value) {
      result = result.replace(
        "[car_value]",
        query.car_value ? `<strong>${query.car_value}</strong>` : "£000,000.00"
      )
    }

    if (query.fuel) {
      result = result.replace(
        "[fuel]",
        query.fuel ? `<strong>${query.fuel}</strong>` : "electric"
      )
    }

    return result
  }

  render() {
    return (
      <section
        id={this.props.id ? this.props.id : null}
        className={styles.Section}
      >
        <Container className={styles.Content}>
          <Row>
            <Col dangerouslySetInnerHTML={{ __html: this.props.title }}></Col>
          </Row>
          <Row>
            <Col className={styles.LinesWrapper} md={6}>
              <div
                className={styles.Line1}
                dangerouslySetInnerHTML={{
                  __html: this.checkReplacement(
                    this.props.resultText.line1,
                    this.state.query
                  ),
                }}
              ></div>

              {this.state.windowWidth < 768 ? (
                <div className={styles.MobileForm}>
                  {this.props.formType === "step" ? (
                    <StepForm query={this.props.query} />
                  ) : (
                    <ResultForm query={this.props.query} />
                  )}
                </div>
              ) : null}

              <div
                className={styles.Line2}
                dangerouslySetInnerHTML={{
                  __html: this.checkReplacement(
                    this.props.resultText.line2,
                    this.state.query
                  ),
                }}
              ></div>

              <div
                className={styles.Line3}
                dangerouslySetInnerHTML={{
                  __html: this.checkReplacement(
                    this.props.resultText.line3,
                    this.state.query
                  ),
                }}
              ></div>

              <div className={styles.LastLine}>
                {this.props.resultText.line4 ? <Timer /> : null}
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.checkReplacement(
                      this.props.resultText.line4,
                      this.state.query
                    ),
                  }}
                ></div>
              </div>
            </Col>
            {this.state.windowWidth > 767 ? (
              <Col md={6}>
                {this.props.formType === "step" ? (
                  <StepForm query={this.props.query} />
                ) : (
                  <ResultForm query={this.props.query} />
                )}
              </Col>
            ) : null}
          </Row>
        </Container>
      </section>
    )
  }
}
export default ResultBlock2
