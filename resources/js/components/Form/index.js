import React, { Component } from "react";
import "./Form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Form extends Component {
  render() {
    const { onChange, onSubmit, onHandleDate, state } = this.props;
    return (


          <form onSubmit={onSubmit} className="form" noValidate>
            {/* name */}
            <h2 className="text-center"><u>Basic Details</u></h2>
            <div className="form-name form-item">
              <label className="form-label">
                First and Last Name<span className="form-asterisk"> *</span>
              </label>
              <input
                className="form-field"
                type="text"
                name="fullName"
                value={state.fullName}
                onChange={onChange}
                placeholder="Vishal Mistry"
                required
              />
              <div className="form-message">{state.formErrors.fullName}</div>
            </div>
            {/* email */}
            <div className="form-email form-item">
              <label className="form-label">
                Email Address<span className="form-asterisk"> *</span>
              </label>
              <input
                className="form-field"
                name="email"
                type="email"
                value={state.email}
                onChange={onChange}
                placeholder="email@example.com"
                required
              />
              <div className="form-message">{state.formErrors.email}</div>
            </div>
            {/* birthdate */}
            <div className="block-birthdate-gender">
              <div className="form-birthdate form-item">
                <label className="form-label">
                  Date of Birth<span className="form-asterisk"> *</span>
                </label>
                <DatePicker
                  className="form-field"
                  name="birthDate"
                  selected={state.birthDate}
                  onChange={onHandleDate}
                  value={state.birthDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholder="dd/mm/yyyy"
                  required
                />
                {/* <input
                  className="form-field"
                  name="birthDate"
                  value={state.birthDate}
                  placeholder="dd/mm/yyyy"
                  required
                /> */}
                <div className="form-message">{state.formErrors.birthDate}</div>
              </div>

              {/* gender */}
              <div className="form-gender form-item">
                <label className="form-label">
                  Gender<span className="form-asterisk"> *</span>
                </label>

                <select
                  className="form-field"
                  name="gender"
                  value={state.value}
                  onChange={onChange}
                  required
                >
                  <option>Choose your gender</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
                <div className="form-message">{state.formErrors.gender}</div>
              </div>
            </div>
            {/* address */}
            <div className="form-address form-item">
              <label className="form-label">
                Address<span className="form-asterisk"> *</span>
              </label>
              <input
                className="form-field"
                name="address"
                type="text"
                value={state.address}
                onChange={onChange}
                placeholder="Streetname"
                required
              />
              <div className="form-message">{state.formErrors.address}</div>

              {/* house number */}
              <div className="block-number-zipcode">
                <div className="form-housNumber">
                  <input
                    className="form-field"
                    name="houseNumber"
                    type="text"
                    value={state.houseNumber}
                    onChange={onChange}
                    placeholder="House number"
                    required
                  />
                  <div className="form-message">
                    {state.formErrors.houseNumber}
                  </div>
                </div>

                {/* zipcode */}
                <div className="form-zipecode">
                  <input
                    className="form-field"
                    name="zipcode"
                    type="text"
                    value={state.zipcode}
                    onChange={onChange}
                    placeholder="Zipcode"
                    required
                  />
                  <div className="form-message">{state.formErrors.zipcode}</div>
                </div>
              </div>
            </div>
            {/* file
            <label className="form-label" />
            <div className="form-file form-item">
              <input
                className="form-field"
                name="file"
                type="file"
                accept=".doc, .docx, .pdf, .rtf, .txt"
                onChange={onChange}
              />
            </div>
              */}
            {/* submit */}
            <div className="form-submit form-item">
              <button
                className="form-item form-submit-button"
                type="button"
                onClick={(e) => onSubmit(e,1)}
              >
                Next Step
              </button>
            </div>
          </form>
    );
  }
}

export default Form;
