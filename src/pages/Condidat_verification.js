import React, { useState } from 'react';
import './Condidat_verification.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function CondidatVerification() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    condidat_email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log(form);
  };

  return (
    <div className="verification-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <h1>Verification</h1>

      <div className="form1-container">
        <form1 onSubmit={handleSubmit}>
          <h2>Veuillez entrer votre adresse e-mail</h2>
          {/* Barre de recherche */}
          <div className="form1-row">
            <input
              type="email"
              name="condidat_email"
              placeholder="Entrer votre email"
              value={form.condidat_email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <button type="submit">OK</button>
          </div>
        </form1>
      </div>
    </div>
  );
}

export default CondidatVerification;
