import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";

function Welcome() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>

          {/* use aria-invalid to indicate field contain error */}
          <input
            id="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register('name', { required: true, maxLength: 30 })}
          />

          {/* use role="alert" to announce the error message */}
          {errors.name && errors.name.type === "required" && (
            <span role="alert">This is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span role="alert">Max length exceeded</span>
          )}

          <input type="submit" />
        </form>
      );
}

export default Welcome;

// DOM element
if (document.getElementById('rooComponent')) {
    ReactDOM.render(<Welcome />, document.getElementById('rooComponent'));
}
