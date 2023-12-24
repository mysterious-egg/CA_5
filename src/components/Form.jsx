import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const initialValues = { username: '', email: '', password: '', repeatPassword: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Enter Username';
    }
    if (!values.email) {
      errors.email = 'Enter Email';
    } 

    if (!values.password) {
      errors.password = 'Enter Password';
    } 

    if (!values.repeatPassword) {
      errors.repeatPassword = 'Entern Repeat password';
    } 

    return errors;
  };

  return (
    <>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success-message">Signed up </div>
        ) : (
          <div></div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <div className="field">
            <input
              type="text"
              name="username"
              placeholder='Name'
              value={formValues.username}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              placeholder='xyz@pqr.np'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <input
              type="password"
              name="password"
              placeholder='******'
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <input
              type="password"
              name="repeatPassword"
              placeholder='******'
              value={formValues.repeatPassword}
              onChange={handleChange}
            />
          </div>

          <button  type="submit" >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
