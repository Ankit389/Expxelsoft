import React, { useState } from 'react';
import './Sign.css'; // External CSS

const Sign = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',         // Default First Name
    lastName: 'Doe',           // Default Last Name
    email: 'johndoe123@email.com', // Default Email
    phoneNumber: '9988776655',  // Default Phone Number
    password: 'john1234'        // Default Password
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let errors = {};
    let valid = true;

    if (!formData.firstName) {
      valid = false;
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      valid = false;
      errors.lastName = 'Last name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      valid = false;
      errors.email = 'Invalid email format';
    }

    const phonePattern = /^\d{10}$/;
    if (!formData.phoneNumber) {
      valid = false;
      errors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(formData.phoneNumber)) {
      valid = false;
      errors.phoneNumber = 'Invalid phone number format (must be 10 digits)';
    }

    if (!formData.password) {
      valid = false;
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      valid = false;
      errors.password = 'Password must be at least 8 characters';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Ready to take a free trial?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="form-box">
        <h2>Sign up for a free account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
