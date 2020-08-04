import React, { useState } from "react"

import styles from "../Form.module.scss"

// Destructure props
const FirstStep = ({
  handleNext,
  handleChange,
  handleFirstError,
  values: { firstName },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  // const [isRealEmpty, setIsRealEmpty] = useState(true)

  const [isEmpty, setIsEmpty] = useState(false)

  // const isEmpty = firstName.length <= 0

  const handleFieldFocus = () => {
    firstName.length <= 0 ? setIsEmpty(true) : setIsEmpty(false)
  }

  const handleFirstError1 = e => {
    if (firstName.length <= 0) {
      setIsEmpty(true)
      handleFirstError("This field is required")
    } else {
      setIsEmpty(false)
      handleFirstError("")
      handleNext(e)
    }
  }

  const _handleKeyDown = e => {
    e.preventDefault()

    if (e.key === "Enter") {
      console.log(e)
    }
  }

  return (
    <div className={styles.Step}>
      <div className={styles.TextFieldWrapper}>
        <div className={styles.ErrorLine}>
          <label htmlFor="first-name">{filedError.firstName}</label>
          <div>1 of 6</div>
        </div>

        <input
          className={styles.TextField}
          id="first-name"
          placeholder="First Name*"
          name="firstName"
          type="text"
          defaultValue={firstName}
          onChange={handleChange("firstName")}
          onSelect={() => handleFieldFocus()}
        />

        <div className={`${styles.ButtonsWrapper} ${styles.FirstButtons}`}>
          <button
            className={styles.Next}
            variant="contained"
            disabled={filedError.firstName !== "" ? true : false || isEmpty}
            onClick={handleFirstError1}
            onKeyDown={_handleKeyDown}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
