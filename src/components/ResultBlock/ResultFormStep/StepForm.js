import React, { useState } from "react"
import { navigate } from "gatsby"
import FirstStep from "./FirstStep"
import ThirdStep from "./ThirdStep"
import SecondStep from "./SecondStep"
import FourthStep from "./FourthStep"
import FifthStep from "./FifthStep"
import SixthStep from "./SixthStep"
import { ProgressBar } from "react-bootstrap"

import styles from "../Form.module.scss"

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/)

const phoneRegex = RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)

const StepForm = ({ query }) => {
  console.log(query)

  const [steps, setSteps] = useState(0)
  const [fields, setFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    postcode: "",
  })
  // Copy fields as they all have the same name
  const [filedError, setFieldError] = useState({
    ...fields,
  })

  const [isError, setIsError] = useState(false)

  // Proceed to next step
  const handleNext = e => {
    e.preventDefault()

    if (steps === 5) {
      e.preventDefault()

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "LeaseFinds LP NEW LEAD - Step Form Results",
          ...fields,
        }),
      })
        .then(navigate("/thanks/"))
        .catch(error => alert(error))
    } else {
      setSteps(steps + 1)

      console.log("is error " + isError)
    }
  }

  const handleFirstError = error => {
    const formErrors = { ...filedError }
    formErrors.firstName = error

    // set error hook
    var isFoundError = false
    Object.values(formErrors).forEach(error => {
      if (error.length > 0) {
        setIsError(true)
        isFoundError = true
      } else if (error.length === 0 && !isFoundError) {
        setIsError(false)
      }
    })
    // set errors hook
    setFieldError({
      ...formErrors,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  // Go back to prev step
  const handleBack = () => setSteps(steps - 1)

  // Handle fields change
  const handleChange = input => ({ target: { value } }) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value,
    })

    // Handle errors
    const formErrors = { ...filedError }
    const lengthValidate = value.length > 0 && value.length < 1

    switch (input) {
      case "firstName":
        formErrors.firstName = lengthValidate ? "This field is required" : ""
        break

      case "lastName":
        formErrors.lastName = lengthValidate ? "This field is required" : ""
        break

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address."
        break

      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "Please enter a valid phone number."
        break

      default:
        break
    }

    // set error hook
    var isFoundError = false
    Object.values(formErrors).forEach(error => {
      if (error.length > 0) {
        setIsError(true)
        isFoundError = true
      } else if (error.length === 0 && !isFoundError) {
        setIsError(false)
      }
    })
    // set errors hook
    setFieldError({
      ...formErrors,
    })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            handleFirstError={handleFirstError}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )

      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 2:
        return (
          <ThirdStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )

      case 3:
        return (
          <FourthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )

      case 4:
        return (
          <FifthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )

      case 5:
        return (
          <SixthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )

      default:
        break
    }
  }

  // Handle components
  return (
    <div className={styles.FormWrapper}>
      <div className={styles.Title}>
        <strong>Claim your free consultation</strong>
      </div>

      <ProgressBar
        className={styles.ProgressBar}
        now={(steps + 1) * 16.6666666667}
      />
      <form
        method="post"
        className="step-form"
        name="LeaseFinds LP NEW LEAD - Step Form Results"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="LeaseFinds LP NEW LEAD - Step Form Results"
        />

        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        {handleSteps(steps)}

        <input hidden type="text" name="firstName" />
        <input hidden type="text" name="lastName" />
        <input hidden type="email" name="email" />
        <input hidden type="tel" name="phone" />
        <input hidden type="text" name="postcode" />
      </form>
    </div>
  )
}

export default StepForm
