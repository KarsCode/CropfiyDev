import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VITE_API_URL } from '../setupEnv';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  async function registerUser(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      await axios.post(`${VITE_API_URL}/register`, {
        name,
        email,
        password,
      });
      alert('Registration Sucessfull. You Can Login Now');
      navigate(`/login`);
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
    
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="Enter E-Mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{' '}
            <Link className="underline text-black" to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;