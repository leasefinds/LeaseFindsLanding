import React, { useState } from "react"

import styles from "../Form.module.scss"

// Destructure props
const SixthStep = ({
  handleNext,
  handleBack,
  handleChange,
  filedError,
  isError,
}) => {
  // Check if all values are not empty

  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = e => {
    if (e.target.checked === true) {
      setIsChecked(true)
      handleChange("consent")
      console.log("consent IS checked")
    } else {
      setIsChecked(false)
      console.log("consent NOT checked")
    }
  }

  return (
    <div className={styles.Step}>
      <div className={styles.ErrorLine}>
        <label></label>
        <div>6 of 6</div>
      </div>

      <div className={styles.CheckBoxWrapper}>
        <input
          id="consent"
          className={styles.TextField}
          name="consent"
          type="checkbox"
          //   onChange={handleChange("consent")}
          onChange={handleCheck}
        />

        <label htmlFor="consent">
          At Lease Finds we take your privacy seriously and we only use your
          personal information in accordance with our{" "}
          <a href="/privacy-policy/" target="_blank">
            privacy policy
          </a>
          . Please check this box to consent with our privacy policy.
        </label>
      </div>

      <div className={`${styles.LastButtons} ${styles.ButtonsWrapper}`}>
        <button className={styles.Back} onClick={handleBack}>
          BACK
        </button>
        <button
          className={styles.Next}
          disabled={!isChecked}
          onClick={handleNext}
        >
          Complete
        </button>
      </div>
    </div>
  )
}

export default SixthStep
