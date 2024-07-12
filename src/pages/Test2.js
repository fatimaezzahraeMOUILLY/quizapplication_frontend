
import React, { useState } from 'react';
import './Test2.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Test2() {
  const [searchQuery, setSearchQuery] = useState('');
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
          <h2>Quelles compétences souhaitez-vous tester ?</h2>
          {/* Barre de recherche */}
        <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
          <div className="form1-row">
          
          <button type="submit" onClick={() => navigate('/Test1')}>Retour</button>
          <button type="submit" onClick={() => navigate('/Test3')}>Suivant</button>
          </div>
          
        </form1>
      </div>
      
    </div>
  );
}

export default Test2;
