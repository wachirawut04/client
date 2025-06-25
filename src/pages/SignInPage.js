import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api from '../api';
import './AuthPage.css'; // shared CSS for SignIn and SignUp

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/signin', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/protected');
    } catch (err) {
      alert(err.response?.data?.message || 'Sign in failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <AuthForm
          title="Sign In"
          onSubmit={handleSignin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
