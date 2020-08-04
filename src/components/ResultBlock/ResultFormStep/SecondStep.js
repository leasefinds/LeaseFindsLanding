import React from "react"

import styles from "../Form.module.scss"

// Destructure props
const SecondStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { lastName },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  const isEmpty = lastName.length <= 0

  return (
    <div className={styles.Step}>
      <div className={styles.ErrorLine}>
        <label htmlFor="last-name">{filedError.lastName}</label>
        <div>2 of 6</div>

      </div>

      <div className={styles.TextFieldWrapper}>
        <input
          id="last-name"
          className={styles.TextField}
          name="lastName"
          placeholder="Last Name*"
          type="text"
          defaultValue={lastName}
          onChange={handleChange("lastName")}
          // error={filedError.email !== ""}
          // helperText={filedError.email !== "" ? `${filedError.email}` : ""}
        />

        <div className={styles.ButtonsWrapper}>
          <button className={styles.Back} onClick={handleBack}>
            BACK
          </button>
          <button
            className={styles.Next}
            disabled={filedError.lastName !== "" ? true : false || isEmpty}
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondStep
