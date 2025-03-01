// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [userData, setUserData] = useState({ uname: '', upass: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('User registered:', userData);
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: '20px' }}>
      <h2>Inscription</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={userData.uname}
        onChange={(e) => setUserData({ ...userData, uname: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={userData.upass}
        onChange={(e) => setUserData({ ...userData, upass: e.target.value })}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;