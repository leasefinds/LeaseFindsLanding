import React, { Component } from "react"
import { navigate } from "gatsby"

import styles from "./DForm.module.scss"

class DForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      borrow: "",
      postcode: "",
    }
  }

  handleSubmit = e => {
    console.log(this.state)
    navigate("/thanks/")

    e.preventDefault()
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { firstName, lastName, phone, email, borrow, postcode } = this.state

    return (
      <div className={styles.FormContainer}>
        <div className={styles.Wrapper}>
          <p className={styles.Title}>Your details</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.FieldsContainer}>
            <div className={styles.Wrapper}>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>

            <div className={styles.Wrapper}>
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className={styles.FieldsContainer}>
            <div className={styles.Wrapper}>
              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                name="phone"
                type="tel"
                value={phone}
                onChange={this.handleChange}
                //   pattern="^(\+?1[ -]?)?\(?[2-9]\d\d\)?[ -]?[2-9]\d\d[ -]?\d{4}$"
              ></input>
            </div>

            <div className={styles.Wrapper}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className={styles.FieldsContainer}>
            <div className={styles.Wrapper}>
              <label htmlFor="borrow">I'd like to borrow</label>

              <select
                id="borrow"
                name="borrow"
                value={borrow}
                onChange={this.handleChange}
              >
                <option value="£0 - £5,000">£0 - £5,000</option>
                <option value="£5,000 - £10,000">£5,000 - £10,000</option>
                <option value="£10,000 - £15,000">£10,000 - £15,000</option>
                <option value="£15,000 - £20,000">£15,000 - £20,000</option>
                <option value="£20,000 - £25,000">£20,000 - £25,000</option>
                <option value="£25,000 - £30,000">£25,000 - £30,000</option>
                <option value="£30,000 - £35,000">£30,000 - £35,000</option>
                <option value="£35,000 - £40,000">£35,000 - £40,000</option>
                <option value="£40,000 - £45,000">£40,000 - £45,000</option>
                <option value="£45,000 - £50,000">£45,000 - £50,000</option>
                <option value="£50,000 - £55,000">£50,000 - £55,000</option>
                <option value="£55,000 - £60,000">£55,000 - £60,000</option>
                <option value="£60,000 - £65,000">£60,000 - £65,000</option>
                <option value="£65,000 - £70,000">£65,000 - £70,000</option>
                <option value="£70,000 - £75,000">£70,000 - £75,000</option>
                <option value="£75,000 - £80,000">£75,000 - £80,000</option>
                <option value="£80,000 +">£80,000 +</option>
              </select>
            </div>

            <div className={styles.Wrapper}>
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                name="postcode"
                value={postcode}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className={styles.Wrapper}>
            <button type="submit">Review your options</button>
          </div>
        </form>
      </div>
    )
  }
}

export default DForm
