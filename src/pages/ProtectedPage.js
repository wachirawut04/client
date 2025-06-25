import React, { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return setMessage('Not authorized');

    // Normally you'd verify with backend, for demo just show success
    setMessage('Welcome to the protected page!');
  }, []);

  return <h2>{message}</h2>;
}
