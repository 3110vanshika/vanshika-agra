import React ,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Register() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    // Add more fields as needed
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      await axios.post('http://localhost:8000/api/formdata/', formData, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      alert('Form data submitted successfully!');
  } catch (error) {
      console.error('Error submitting form data:', error);
  }
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

  return (
    <div className='AuthSection'>
       <div className="AuthImage">
           <img src="/images/bg.jpg" alt="" />
       </div>
       <div className="AuthForm">
           <div className="Heading">
              <h1>Register</h1>
           </div>
           <div className="Form">
              <form onSubmit={handleSubmit} method='post'>
                  <div className="mb">
                      <label htmlFor="Fullname">Fullname</label>
                      <input type="text" name='fullname' onChange={handleInputChange} />
                  </div>
                  <div className="mb">
                      <label htmlFor="Email">Email</label>
                      <input type="text" name='email' onChange={handleInputChange} />
                  </div>
                  <div className="mb">
                      <label htmlFor="Password">Password</label>
                      <input type="password" name='password' onChange={handleInputChange} />
                  </div>
                  <div className="mb">
                      <input className='btn' type="submit" value="Register" />
                  </div>
              </form>
           </div>
       </div>
    </div>
  )
}
