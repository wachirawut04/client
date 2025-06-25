import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api from '../api';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/signup', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/protected');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return <AuthForm title="Sign Up" onSubmit={handleSignup} {...{ email, setEmail, password, setPassword }} />;
}
