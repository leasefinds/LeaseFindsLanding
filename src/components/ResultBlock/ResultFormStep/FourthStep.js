import React from "react"

import styles from "../Form.module.scss"

// Destructure props
const FourthStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { phone },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  const isEmpty = phone.length <= 0

  return (
    <div className={styles.Step}>
      <div className={styles.ErrorLine}>
        <label htmlFor="phone">{filedError.phone}</label>
        <div>4 of 6</div>

      </div>

      <div className={styles.TextFieldWrapper}>
        <input
          id="phone"
          className={styles.TextField}
          name="phone"
          placeholder="Phone number"
          type="tel"
          defaultValue={phone}
          onChange={handleChange("phone")}
          // error={filedError.email !== ""}
          // helperText={filedError.email !== "" ? `${filedError.email}` : ""}
        />

        <div className={styles.ButtonsWrapper}>
          <button className={styles.Back} onClick={handleBack}>
            BACK
          </button>
          <button
            className={styles.Next}
            disabled={filedError.phone !== "" ? true : false || isEmpty}
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default FourthStep
