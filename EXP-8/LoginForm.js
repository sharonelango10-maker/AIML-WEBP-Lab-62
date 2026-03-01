import React, { useState } from 'react';

const LoginForm = () => {
  // Step 3: Initialize state for form data and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Step 5: Single change handler using spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Step 6: Validation Logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      tempErrors.email = "Invalid email format (missing @)";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    return tempErrors;
  };

  // Step 7: Handle Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form Submitted Successfully:", formData);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Part A: Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && <h4 style={{ color: 'green' }}>Login Successful!</h4>}

      {/* Step 8: Dynamic Display */}
      <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
        <h4>Live Preview:</h4>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
};

export default LoginForm;