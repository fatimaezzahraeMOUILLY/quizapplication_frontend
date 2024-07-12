import React, { useState } from 'react';
import './Login.css'; 
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom'; 

// Composant fonctionnel Login
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez la logique de connexion ici
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirection après connexion réussie
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Barre de navigation */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="H2">
      <p >Bienvenue sur la plateforme de gestion des tests.</p>
      <p >Veuillez entrer vos identifiants pour accéder à l'application</p>
      </div>
      {/* Formulaire de connexion */}
      <div className="login-form">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" onClick={() => navigate('/Test1')}>Login</button>
          </form>
        </div>
      </div>
      
      <div className="footer">
      <div>
          <p><span className="highlight">Email</span> : contact@portnet.ma</p>
          <p><span className="highlight">Fix</span> : +212 5 20 473 100</p>
          <p><span className="highlight">Fax</span> : +212 5 20 473 101</p>
        </div>
        <div>
          <p><span className="highlight">Adresse</span> : Enceinte Portuaire, Bâtiment de la Capitainerie, 2ème étage Port de Casablanca, 20000, Casablanca Maroc.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
