import React, { useState } from 'react';

function MultistepForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    setStep(1);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Multi-Step Form</h2>
      <form>
        {step === 1 && (
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <br />
            <button onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <br />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleSubmit} style={{ marginLeft: '0.5em' }}>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default MultistepForm;