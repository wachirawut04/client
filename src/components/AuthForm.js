import React from 'react';

export default function AuthForm({ title, onSubmit, email, setEmail, password, setPassword }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <div>
        <label>Email:</label>
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">{title}</button>
    </form>
  );
}