import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => {
    setData(data);
    axios({
      method:'post',
      url: 'https://reqres.in/api/users',
      data: data
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id='firstName'
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.firstName && (
            <p data-testid='error'>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id='lastName'
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p data-testid='error'>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id='email' name="email" ref={register({ required: true })} />
          {errors.email && (
            <p data-testid='error'>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id='message' name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid='output' style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" id='submit'/>
      </form>
    </div>
  );
};

export default ContactForm;
