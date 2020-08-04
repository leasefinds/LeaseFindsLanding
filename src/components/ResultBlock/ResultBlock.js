// import React from "react"
// import { graphql } from "gatsby"
// import { Container, Row, Col } from "react-bootstrap"
// import queryString from "query-string"
// import Timer from "../hooks/Timer"
// import { useEffect, useState } from "react"

// import styles from "./ResultBlock.module.scss"

// export const fragment = graphql`
//   fragment ResultBlock on WPGraphQL_Page_Sectionfields_Sections_ResultBlock {
//     id
//     title
//     resultText {
//       line1
//       line2
//       line3
//       line4
//     }
//   }
// `

// const ResultBlock = ({ title, id, location, resultText }) => {
//   const checkReplacement = (line, query) => {
//     let result = line

//     if (query.monthly_cost) {
//       result = result.replace(
//         "[monthly_cost]",
//         query.monthly_cost
//           ? `<strong>${query.monthly_cost}</strong>`
//           : "£1000.00"
//       )
//     }
//     if (query.months_paying) {
//       result = result.replace(
//         "[months_paying]",
//         query.months_paying ? `${query.months_paying}` : "000"
//       )
//     }

//     if (query.deposit) {
//       result = result.replace(
//         "[deposit]",
//         query.deposit ? `<strong>${query.deposit}%</strong>` : "00%"
//       )
//     }

//     if (query.car_value) {
//       result = result.replace(
//         "[car_value]",
//         query.car_value ? `<strong>${query.car_value}</strong>` : "£000,000.00"
//       )
//     }

//     if (query.fuel) {
//       result = result.replace(
//         "[fuel]",
//         query.fuel ? `<strong>${query.fuel}</strong>` : "electric"
//       )
//     }

//     return result
//   }

//   const query = queryString.parse(location.search)

//   let firstLine = checkReplacement(resultText.line1, query)
//   let secondLine = checkReplacement(resultText.line2, query)
//   let thirdLine = checkReplacement(resultText.line3, query)
//   let fourthLine = checkReplacement(resultText.line4, query)

//   return (
//     <section id={id ? id : null} className={styles.Section}>
//       <Container className={styles.TitleContainer}>
//         <Row>
//           <Col dangerouslySetInnerHTML={{ __html: title }}></Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             {console.log(firstLine)}
//             {console.log(secondLine)}
//             {console.log(thirdLine)}
//             {console.log(fourthLine)}
//             {console.log(query)}


//             {query ? (
//               <div>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: firstLine,
//                   }}
//                 ></div>
//                 <div dangerouslySetInnerHTML={{ __html: secondLine }}></div>
//                 <div dangerouslySetInnerHTML={{ __html: thirdLine }}></div>
//                 <div className={styles.LastLine}>
//                   <Timer />
//                   <div dangerouslySetInnerHTML={{ __html: fourthLine }}></div>
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}

//             <pre>{JSON.stringify(query, null, 2)}</pre>
//           </Col>
//           <Col md={6}>form</Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default ResultBlock
