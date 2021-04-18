import React, { Component } from "react";
import "./Form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Form3 extends Component {
  renderLanguages(languages) {
    const { onLanguageChange } = this.props;
    if (languages && languages.length > 0) {
      return languages.map((d, i) => {
        const { language_name, ability, is_selected } = d;
        return (
          <div key={i} className="row">
            <div className="col-md-3">
              <label htmlFor={language_name}>{language_name}</label>
              <input
                id={language_name}
                name={language_name}
                className=""
                type="checkbox"
                defaultChecked={is_selected}
                onChange={(e) =>
                  onLanguageChange(e.target.name, e.target.checked, i)
                }
                required
              />
            </div>
            {this.readWriteSyntax(language_name, ability, is_selected, i)}
          </div>
        );
      });
    } else return false;
  }
  readWriteSyntax(language = "", ability, is_selected, i) {
    const { handleAbilityLang } = this.props;
    const { read, write, speak } = ability;
    var msg =  false;
    if(!read && !write && !speak && is_selected){
        msg = true;
    }
    return (
      <div className="col-md-6">
          {
          msg ?
          <span style={{color:'red'}}>Please select at least one.</span>:''
          }

        <div className="row">
          <div className="col-sm-2">
            <label>Read&nbsp;</label>
            <input
              className=""
              type="checkbox"
              name="read"
              value={read}
              checked={read}
              onChange={(e) =>
                handleAbilityLang(e.target.name, e.target.checked, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
          <div className="col-sm-2">
            <label>Write&nbsp;</label>
            <input
              className=""
              type="checkbox"
              name="write"
              value={write}
              checked={write}
              onChange={(e) =>
                handleAbilityLang(e.target.name, e.target.checked, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
          <div className="col-sm-2">
            <label>Speak&nbsp;</label>
            <input
              className=""
              type="checkbox"
              name="speak"
              value={speak}
              checked={speak}
              onChange={(e) =>
                handleAbilityLang(e.target.name, e.target.checked, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }
  techNoSyntax(language = "", is_selected, i, n) {
    const { onTechnicalChange } = this.props;
    var msg =  false;
    if(language == '' && is_selected){
        msg = true;
    }
    return (
      <div className="col-md-6">
           {
          msg ?
          <span style={{color:'red'}}>Please choose.</span>:''
          }
        <div className="row">
          <div className="col-sm-3">
            <label>beginner&nbsp;</label>
            <input
              className=""
              type="radio"
              name={"technology_value_" + n}
              value={"beginner"}
              checked={language == "beginner" ? true : false}
              onChange={(e) =>
                onTechnicalChange("technology_value", e.target.value, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
          <div className="col-sm-3">
            <label>Mediator&nbsp;</label>
            <input
              className=""
              type="radio"
              name={"technology_value_" + n}
              value={"Mediator"}
              checked={language == "Mediator" ? true : false}
              onChange={(e) =>
                onTechnicalChange("technology_value", e.target.value, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
          <div className="col-sm-3">
            <label>Expert&nbsp;</label>
            <input
              className=""
              type="radio"
              name={"technology_value_" + n}
              value={"Expert"}
              checked={language == "Expert" ? true : false}
              onChange={(e) =>
                onTechnicalChange("technology_value", e.target.value, i)
              }
              disabled={!is_selected}
              required
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }

  renderTechnicalExperience(expertise) {
    const { onTechnicalChange } = this.props;
    if (expertise && expertise.length > 0) {
      return expertise.map((d, i) => {
        const { technology_name, technology_value, ability, is_selected } = d;
        return (
          <div key={i} className="row">
            <div className="col-md-3">
              <label htmlFor={technology_name}>{technology_name}</label>
              <input
                id={technology_name}
                name={technology_name}
                className=""
                type="checkbox"
                defaultChecked={is_selected}
                onChange={(e) =>
                  onTechnicalChange(e.target.name, e.target.checked, i, true)
                }
                required
              />
            </div>
            {this.techNoSyntax(
              technology_value,
              is_selected,
              i,
              technology_name
            )}
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
    } = this.props;
    return (
          <form onSubmit={onSubmit} className="form" noValidate>
            {/* name */}
            <h3 className="text-left">
             Known Languages
            </h3>
            <div className="form-group">
              {this.renderLanguages(state.known_languages)}
              <div className="form-message">{state.formErrors.fullName}</div>
            </div>
            <h3 className="text-left">
              Technical Experience
            </h3>
            <div className="form-group">
              {this.renderTechnicalExperience(state.technical_expertise)}
              <div className="form-message">{state.formErrors.fullName}</div>
            </div>
            <h3 className="text-left">
              Preference
            </h3>
            <div className="form-group">
              <div className="row">
                  <select onChange={onChange} value={state.preferred_location} className="form-field" name="preferred_location">
                      <option value=''>---Preferred Location---</option>
                      <option value='Ahmedabad'>Ahmedabad</option>
                      <option value='Mumbai'>Mumbai</option>
                      <option value='Bangalore'>Bangalore</option>
                      <option value='Pune'>Pune</option>
                      <option value='New York'>New York</option>
                  </select>
                  <div className="form-message">{state.formErrors.preferred_location}</div>
              </div>
              <div className="row">
                  <input type="text" className="form-field" placeholder="Expected CTC eg. 17 LPA" name="expected_ctc" value={state.expected_ctc} onChange={onChange}/>
                  <div className="form-message">{state.formErrors.expected_ctc}</div>
              </div>
              <div className="row">
                  <input type="text" className="form-field" name="current_ctc" placeholder="Current CTC eg. 12 LPA" value={state.current_ctc} onChange={onChange}/>
                  <div className="form-message">{state.formErrors.current_ctc}</div>
              </div>
              <div className="row">
                  <input type="text" className="form-field" name="notice_period" placeholder="Notice Period eg. 45 days" value={state.notice_period} onChange={onChange}/>
                  <div className="form-message">{state.formErrors.notice_period}</div>
              </div>
            </div>
            {/* Preferred Location */}
            <div className="row">
                <div className="col-md-3">
                    <div className="form-submit form-item">
                        <button
                        className="form-item form-submit-button"
                        type="button"
                        onClick={() => handleFormSteps(1)}>
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
                            onClick={(e) => onSubmit(e,'')}
                        >
                            Submit
                        </button>
                        </div>
                </div>
            </div>

          </form>
    );
  }
}

export default Form3;
