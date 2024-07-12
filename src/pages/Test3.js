import React, { useState } from 'react';
import './Test3.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Test3() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([{ name: '', email: '' }]);

  const handleCandidateChange = (index, e) => {
    const { name, value } = e.target;
    const newCandidates = [...candidates];
    newCandidates[index][name] = value;
    setCandidates(newCandidates);
  };

  const handleAddCandidate = () => {
    setCandidates([...candidates, { name: '', email: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log(candidates);
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
        <form onSubmit={handleSubmit}>
          <h2>Inviter des candidats</h2>
          <div className="candidate-list">
            {candidates.map((candidate, index) => (
              <div className="form1-row" key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="Entrer le nom du candidat"
                  value={candidate.name}
                  onChange={(e) => handleCandidateChange(index, e)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Entrer l’email du candidat"
                  value={candidate.email}
                  onChange={(e) => handleCandidateChange(index, e)}
                />
              </div>
            ))}
          </div>
          <div className="form1-row">
            <button type="button" className="button2" onClick={handleAddCandidate}>Ajouter</button>
          </div>
          <div className="form1-row">
            <button className="button" type="submit">Visualiser le test</button>
            <button className="button" type="submit">Envoyer le test</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Test3;
