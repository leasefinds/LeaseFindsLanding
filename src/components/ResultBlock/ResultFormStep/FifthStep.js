import React from "react"

import styles from "../Form.module.scss"

// Destructure props
const FifthStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { postcode },
  filedError,
  isError,
}) => {
  // Check if all values are not empty
  const isEmpty = postcode.length <= 0

  return (
    <div className={styles.Step}>
      <div className={styles.ErrorLine}>
        <label htmlFor="postcode">{filedError.postcode}</label>
        <div>5 of 6</div>

      </div>

      <div className={styles.TextFieldWrapper}>
        <input
          id="postcode"
          className={styles.TextField}
          name="postcode"
          placeholder="Postcode"
          type="text"
          defaultValue={postcode}
          onChange={handleChange("postcode")}
          // error={filedError.email !== ""}
          // helperText={filedError.email !== "" ? `${filedError.email}` : ""}
        />

        <div className={styles.ButtonsWrapper}>
          <button className={styles.Back} onClick={handleBack}>
            BACK
          </button>
          <button
            className={styles.Next}
            // disabled={filedError.postcode !== "" ? true : false || isEmpty}
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default FifthStep
