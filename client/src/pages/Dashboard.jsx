import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchMe() {
      try {
        const data = await api('/auth/me', 'GET', null, token);
        setUser(data);
      } catch (err) {
        // if token invalid or expired, log out and redirect
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
    fetchMe();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
