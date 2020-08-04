import React from "react"

import styles from "../Form.module.scss"

// Destructure props
const ThirdStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { email },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  const isEmpty = email.length <= 0

  return (
    <div className={styles.Step}>
      <div className={styles.ErrorLine}>
        <label htmlFor="email">{filedError.email}</label>
        <div>3 of 6</div>
      </div>

      <div className={styles.TextFieldWrapper}>
        <input
          placeholder="Email"
          id="email"
          className={styles.TextField}
          name="User Email"
          type="email"
          defaultValue={email}
          onChange={handleChange("email")}
          // error={filedError.email !== ""}
          // helperText={filedError.email !== "" ? `${filedError.email}` : ""}
        />

        <div className={styles.ButtonsWrapper}>
          <button className={styles.Back} onClick={handleBack}>
            BACK
          </button>
          <button
            className={styles.Next}
            disabled={filedError.email !== "" ? true : false || isEmpty}
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdStep
