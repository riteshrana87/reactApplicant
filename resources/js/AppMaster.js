import React, { Component } from "react";
import "./App.scss";
import Swal from "sweetalert2";
import Header from "./components/Header";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Footer from "./components/Footer";

class AppMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      birthDate: new Date(),
      email: "",
      gender: "",
      address: "",
      houseNumber: "",
      zipcode: "",
      file: new FileReader(),
      letter: "",
      submitting: true,
      formErrors: {
        fullName: "",
        birthDate: "",
        email: "",
        gender: "",
        address: "",
        houseNumber: "",
        zipcode: "",
        file: "ok",
        letter: "ok",
        preferred_location: "",
        expected_ctc : "",
        current_ctc:"",
        notice_period : "",
      },
      isModalOpen: false,
      work_experiance : [],
      known_languages : [
            {
                language_name : "english",
                is_selected : false,
                ability : {
                    read : false,
                    write : false,
                    speak : false
                }
            },
            {
                language_name : "gujarati",
                is_selected : false,
                ability : {
                    read : false,
                    write : false,
                    speak : false
                }
            },
            {
                language_name : "hindi",
                is_selected : false,
                ability : {
                    read : false,
                    write : false,
                    speak : false
                }
            }
      ],
      technical_expertise : [
        {
            technology_name : 'php',
            is_selected : false,
            technology_value:''
        },
        {
            technology_name : 'mysql',
            is_selected : false,
            technology_value:''
        },
        {
            technology_name : 'laravel',
            is_selected : false,
            technology_value:''
        },
        {
            technology_name : 'reactjs',
            is_selected : false,
            technology_value:''
        }
      ],
      preferred_location : '',
      expected_ctc : '',
      current_ctc:'',
      notice_period : '',
      show: "",
      formSteps:2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFormSteps = this.handleFormSteps.bind(this);
    this.handleAbilityLang = this.handleAbilityLang.bind(this);
    this.onTechnicalChange = this.onTechnicalChange.bind(this);
  }

  handleDate(date) {
    this.setState({
      birthDate: date
    });
  }
  handleFormSteps(v){
      this.setState({formSteps:v});
  }

  handleChangeLanguage(name,value,i){
    const {known_languages} = this.state;
    var lang = known_languages;
    lang[i].is_selected = value;
    if(!value){
        lang[i].ability = {
            read : false,
            write : false,
            speak : false
        }
    }

    this.setState({known_languages:lang});
  }

  handleAbilityLang(name,value,i){
    const {known_languages} = this.state;
    var lang = known_languages;
    lang[i].ability[name] = value;
    this.setState({known_languages:lang});
  }

  onTechnicalChange(name,value,i,flag = false){
    const {technical_expertise} = this.state;
    var tech = technical_expertise;
    if(flag){
        tech[i].is_selected = value;
        if(!value){
            tech[i]['technology_value'] = '';
        }
    }else{
        tech[i][name] = value;
    }

    this.setState({technical_expertise:tech});
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    console.log("name: ", name);
    console.log("value : ", value);

    switch (name) {
      case "fullName":
        formErrors.fullName =
          value.length < 3 ? "Minimum 3 characters required" : "Perfect!";
        break;

      case "birthDate":
        formErrors.birthDate = RegExp(
          /^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?((\d{2})?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/
          // /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        ).test(value)
          ? "Perfect!"
          : "Enter DD/MM/YYYY birthdate format";
        break;

      case "email":
        formErrors.email =
          RegExp(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          ).test(value) && value.length > 0
            ? "Perfect!"
            : "Invalid email address";
        break;

      case "gender":
        formErrors.gender =
          RegExp(/^male$||^female$/).test(value) && value.length > 0
            ? "Perfect!"
            : "Please choose a gender";
        break;

      case "address":
        formErrors.address =
          value.length < 2 && value.length > 0
            ? "street name required"
            : "Perfect!";
        break;

      case "houseNumber":
        formErrors.houseNumber =
          RegExp(/^[0-9]*$/).test(value) && value.length > 0
            ? "Perfect!"
            : "Numeric characters required";
        break;

      case "zipcode":
        formErrors.zipcode = RegExp(/^[0-9]*$/).test(value) && value.length > 4
          ? "Perfect!"
          : "Please enter a valid  zipcode";
        break;
      case "preferred_location":
        formErrors.preferred_location =
        value == ''
          ? "preferred location is required"
          : "Perfect!";
          break;
       case "expected_ctc":
        formErrors.expected_ctc =
        value == '' || value.length > 15
            ? "Expected CTC field required"
            : "Perfect!";
        break;
        case "current_ctc":
            formErrors.current_ctc =
            value == '' || value.length > 15
                ? "Current CTC field required"
                : "Perfect!";
            break;
        case "notice_period":
            console.log(value.length )
            formErrors.notice_period =
            value == '' || value.length > 7
                ? "Notice period field required"
                : "Perfect!";
            break;
      default:
        break;


    }
    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => console.log()
    );
  }

  handleSubmit(e) {
    console.log(this.state.formErrors);
    e.preventDefault();
    if (
      this.state.formErrors.fullName === "Perfect!" &&
      this.state.formErrors.birthDate === "" &&
      this.state.formErrors.email === "Perfect!" &&
      this.state.formErrors.gender === "Perfect!" &&
      this.state.formErrors.address === "Perfect!" &&
      this.state.formErrors.houseNumber === "Perfect!" &&
      this.state.formErrors.zipcode === "Perfect!" &&
      this.state.formErrors.preferred_location === 'Perfect!' &&
      this.state.formErrors.expected_ctc === 'Perfect!' &&
      this.state.formErrors.current_ctc === 'Perfect!' &&
      this.state.formErrors.notice_period === 'Perfect!' &&
      this.state.formErrors.file === "ok" &&
      this.state.formErrors.letter === "ok"
    ) {
      Swal.fire(
        "Thanks for submitting!",
        "We will contact you soon!",
        "success"
      );
    } else {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }

  onFormChangeSteps(){
      const {formSteps} = this.state;
      if(formSteps === 0){
        return (
            <Form
              state={this.state}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onHandleDate={this.handleDate}
            />
        )
      }else if(formSteps === 1){
        return (
            <Form2
              state={this.state}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onHandleDate={this.handleDate}
            />
        )
      }else if(formSteps === 2){
        return (
            <Form3
              state={this.state}
              onChange={this.handleChange}
              onLanguageChange={this.handleChangeLanguage}
              onTechnicalChange={this.onTechnicalChange}
              handleAbilityLang={this.handleAbilityLang}
              onSubmit={this.handleSubmit}
              onHandleDate={this.handleDate}
            />
        )
      }
  }
  render() {
    return (
        <div className="AppMaster">
          <Header/>
          <main>
          <div className="wrapper-padding">
        <h1 className="form-title">Job Application</h1>
        <p className="form-text">
          In order to apply, please fill the following form.
        </p>
        <p className="form-subtext">
          All fields with <span className="form-asterisk"> *</span> are
          required.
        </p>
            <div className="form-wrapper">
                {this.onFormChangeSteps()}
                </div>
            </div>
          </main>
          <Footer />
        </div>
    );
  }
}

export default AppMaster;
