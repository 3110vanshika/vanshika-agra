import React, {useState} from 'react'
import axios from 'axios';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        // Add more fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const csrftoken = getCookie('csrftoken');
            const response = await axios.post(
                'http://localhost:8000/login/',
                formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken,
                    },
                }
            );

            console.log('Login successful:', response.data.message);
            setAuth({
                ...auth,
                user: response.data.user
              });
              localStorage.setItem('auth', JSON.stringify(response.data))
              navigate('/');
        } catch (error) {
            setError('Invalid login credentials');
        }
    };
  return (
    <div className='AuthSection'>
       <div className="AuthImage">
           <img src="/images/bg.jpg" alt="" />
       </div>
       <div className="AuthForm">
           <div className="Heading">
              <h1>LOGIN</h1>
           </div>
           <div className="Form">
              <form onSubmit={handleLogin}>
                  <div className="mb">
                      <label htmlFor="Email">Email</label>
                      <input type="text" name='email' onChange={handleInputChange} />
                  </div>
                  <div className="mb">
                      <label htmlFor="Password">Password</label>
                      <input type="password" name='password' onChange={handleInputChange} />
                  </div>
                  <div className="mb">
                      <input className='btn' type="submit" value="Login" />
                  </div>
              </form>
           </div>
       </div>
    </div>
  )
}
