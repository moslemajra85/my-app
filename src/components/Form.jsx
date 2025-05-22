import { useState } from 'react';
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              onChange={handleFirstNameChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={handleLastNameChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={handleEmailChange}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={handlePasswordChange}
              type="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
