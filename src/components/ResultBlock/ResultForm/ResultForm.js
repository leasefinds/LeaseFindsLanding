import React, { Component } from "react"
import { navigate } from "gatsby"

import styles from "../Form.module.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ResultForm extends Component {
  constructor(props) {
    super(props)
    this.state = { phone: "", time: "" }
  }

  handleSubmit = e => {
    console.log(this.state)
    navigate("/thanks-1/")
    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { phone, time } = this.state
    return (
      <div className={styles.FormWrapper}>
        <div className={styles.Title}>
          <strong>Claim your free consultation</strong>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className={styles.TextFieldWrapper}>
            <input
              className={styles.TextField}
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={this.handleChange}
              //   pattern="^(\+?1[ -]?)?\(?[2-9]\d\d\)?[ -]?[2-9]\d\d[ -]?\d{4}$"
            ></input>
          </div>

          <div className={styles.TextFieldWrapper}>
            <select
              className={`${styles.TextField} ${styles.Select}`}
              name="time"
              value={time}
              onChange={this.handleChange}
            >
              <option value="">Best Time To Call</option>
              <option value="8am - 11am">8am - 11am</option>
              <option value="11am - 2pm">11am - 2pm</option>
              <option value="2pm - 5pm">2pm - 5pm</option>
            </select>
          </div>

          <div className={styles.ButtonsWrapper}>
            <button className={styles.BigButton} type="submit">
              Review your options
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ResultForm
