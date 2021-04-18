import React, { Component } from "react";
import "./Form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Form2 extends Component {
    renderEducation(education) {
    const { handleEducationBoard,handleRemoveEducation } = this.props;
    if (education && education.length > 0) {
      return education.map((d, i) => {
        const { education_board,
        year,
        percentage } = d;
        return (
          <div key={i} className="row">
            <div className="col-md-3">
              <input
                name='education_board'
                placeholder="Board/University"
                value={education_board}
                className="form-control"
                type="text"
                onChange={(e) =>
                    handleEducationBoard(e.target.name, e.target.value, i)
                }
                required
              />
            </div>
            <div className="col-md-3">
              <input
                name='year'
                placeholder="Year eg. 2020"
                className="form-control"
                maxLength={4}
                value={year}
                type="text"
                onChange={(e) =>
                    handleEducationBoard(e.target.name, e.target.value, i)
                }
                required
              />
            </div>
            <div className="col-md-3">
              <input
                name='percentage'
                value={percentage}
                placeholder="CGPA/Percentage"
                className="form-control"
                type="text"
                onChange={(e) =>
                    handleEducationBoard(e.target.name, e.target.value, i)
                }
                required
              />


            </div>
            <div className="col-md-1">
                {
                        i != 0 ?
                        <button type="button" onClick={() => handleRemoveEducation(i)} className="btn btn-danger"><strong>-</strong></button>:''
                    }
            </div>
          </div>
        );
      });
    } else return false;
  }

  renderWorkExp(exp){
    const { handleExperience,handleRemoveExp } = this.props;
    if (exp && exp.length > 0) {
      return exp.map((d, i) => {
        const {   company,
        designation,
        from_date,
        to_date } = d;
        return (
        <div key={i}>
            <div className="row">
            <span><strong>History </strong>: {i+1} </span>
            <div className="col-md-1">
                {
                        i != 0 ?
                        <button type="button" onClick={() => handleRemoveExp(i)} className="btn btn-danger"><strong>-</strong></button>:''
                    }
            </div>
            </div>
          <div  className="row">

            <div className="col-md-5">
            <label className="form-label">
                  Company<span className="form-asterisk"> *</span>
                </label>
              <input
                name='company'
                placeholder="eg. Google Inc."
                value={company}
                maxLength={25}
                className="form-control"
                type="text"
                onChange={(e) =>
                    handleExperience(e.target.name, e.target.value, i)
                }
                required
              />
            </div>
            <div className="col-md-5">
            <label className="form-label">
                  Designation<span className="form-asterisk"> *</span>
                </label>
              <input
                name='designation'
                placeholder="eg. Sr React Developer"
                className="form-control"
                maxLength={20}
                value={designation}
                type="text"
                onChange={(e) =>
                    handleExperience(e.target.name, e.target.value, i)
                }
                required
              />
            </div>


          </div>
          <div className="row">
               <div className="col-md-5">

                <label className="form-label">
                  From<span className="form-asterisk"> *</span>
                </label>
                <DatePicker
                    className="form-control"
                    name="from_date"
                    selected={from_date}
                    onChange={(e) => handleExperience('from_date',e,i)}
                    value={from_date}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholder="dd/mm/yyyy"
                    required
                    />
                </div>

            <div className="col-md-5">

                <label className="form-label">
                  TO<span className="form-asterisk"> *</span>
                </label>
                <DatePicker
                    className="form-control"
                    name="to_date"
                    selected={to_date}
                    onChange={(e) => handleExperience('to_date',e,i)}
                    value={to_date}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholder="dd/mm/yyyy"
                    required
                    />
                </div>

          </div>
          <hr/>
          </div>
        );
      });
    } else return false;
  }



  render() {
    const {
      onChange,
      onLanguageChange,
      onSubmit,
      onHandleDate,
      state,
      handleFormSteps,
      handleAddMoreEducation,
      handleAddMoreExp,
    } = this.props;
    return (
          <form onSubmit={onSubmit} className="form" noValidate>
            {/* name */}
            <div className="form-group">
            <div className="row">
            <div className="col-md-10">
            <h3 className="text-left">
                Education details <small>(SSC, HSC,Graduation, Master Degree)</small>
            </h3>
            </div>
            <div className="col-md-2">
                <button type="button" onClick={() => handleAddMoreEducation()} className="form-item btn btn-success">Add More</button>
            </div>

            </div>
            </div>

            <div className="form-group">
                {
                    state.education_details && state.education_details.length > 4 ?
                    <span>Max 10 records allowed.</span>:''
                }
              {this.renderEducation(state.education_details)}
            </div>
            <hr/>
            <div className="row">

                <div className="col-md-4">
                    <h3 className="text-left">
                    Work Experience
                    </h3>
                </div>

                <div className="col-md-3"></div>
                <div className="col-md-2">
                    <button type="button" onClick={() => handleAddMoreExp()} className="form-item btn btn-success">Add More</button>
                </div>

            </div>

            <div className="form-group">
                {this.renderWorkExp(state.work_experience)}
            </div>


            <div className="row">
                <div className="col-md-3">
                    <div className="form-submit form-item">
                        <button
                        className="form-item form-submit-button"
                        type="button"
                        onClick={() => handleFormSteps(0)}>
                        Previous</button>
                    </div>
                     {/** Previous step */}
                </div>
                <div className="col-md-3">
                    {/* Final submit */}
                        <div className="form-submit form-item">
                        <button
                            className="form-item form-submit-button"
                            type="button"
                            onClick={(e) => onSubmit(e,2)}
                        >
                            Next Step
                        </button>
                        </div>
                </div>
            </div>

          </form>
    );
  }
}

export default Form2;
