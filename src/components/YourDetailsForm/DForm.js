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
      brand: "",
      postalcode: "",
    }
  }

  handleSubmit = e => {
    console.log(this.state)
    navigate("/thanks/")

    e.preventDefault()
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { firstName, lastName, phone, email, brand, postalcode } = this.state

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
                required
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
                required
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
                required
                onChange={this.handleChange}
                pattern="^([0-9\(\)\/\+ \-]*)$"
                // pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
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
                required
              />
            </div>
          </div>

          <div className={styles.FieldsContainer}>
            <div className={styles.Wrapper}>
              <label htmlFor="brand">Chose a car brand</label>

              <select
                id="brand"
                name="brand"
                value={brand}
                onChange={this.handleChange}
                required
              >
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="Tesla">Tesla</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Nissan">Nissan</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="General Motors">General Motors</option>
                <option value="Bmw">Bmw</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Subaru">Subaru</option>
                <option value="Ford Motor Company">Ford Motor Company</option>
                <option value="Mazda">Mazda</option>
                <option value="Dodge">Dodge</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Kia">Kia</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Buick">Buick</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Fiat">Fiat</option>
                <option value="MINI">MINI</option>
                <option value="GMC">GMC</option>
                <option value="Acura">Acura</option>
              </select>
            </div>

            <div className={styles.Wrapper}>
              <label htmlFor="postalcode">Postal code</label>
              <input
                id="postalcode"
                type="text"
                name="postalcode"
                value={postalcode}
                onChange={this.handleChange}
                required
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
