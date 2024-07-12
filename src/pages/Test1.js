import React, { useState } from 'react';
import './Test1.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Test1() {
    const navigate = useNavigate();
  const [form1, setForm] = useState({
    testName: '',
    domain: '',
    role: '',
    level: ''
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
    console.log(form1);
  };

  return (
    <div className="create-test-container">
      <div className="navbar">
      <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <a href="#home" onClick={() => navigate('/Login')}>Home</a>
          <a href="#tests">Tests</a>
          <a href="#results">Résultats</a>
          <a href="#more">Plus</a>
        </nav>
        <button className="create-test-button" onClick={() => navigate('/Test1')}>Créer un test</button>
      </div>

      <h1>Créer un test</h1>

      <div className="form1-container">
        <form1 onSubmit={handleSubmit}>
          <div className="form1-row">
            <input
              type="text"
              name="testName"
              placeholder="Entrer le nom du test"
              value={form1.testName}
              onChange={handleChange}
            />
            <select
              name="domain"
              value={form1.domain}
              onChange={handleChange}
            >
              <option value="">Choisir le domaine</option>
              
            </select>
          </div>
          <div className="form1-row">
            <select
              name="role"
              value={form1.role}
              onChange={handleChange}
            >
              <option value="">Choisir le rôle</option>
              
            </select>
            <select
              name="level"
              value={form1.level}
              onChange={handleChange}
            >
              <option value="">Choisir le niveau</option>
              
            </select>
          </div>
          <button type="submit" onClick={() => navigate('/Test2')}>Suivant</button>
        </form1>
      </div>
      
    </div>
  );
}

export default Test1;