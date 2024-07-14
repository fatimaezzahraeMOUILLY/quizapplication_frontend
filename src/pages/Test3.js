import React, { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
} from '@mui/material';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, #f0f0f0 65%, #232A56 35%)', color: '#000', minHeight: '100vh' }}>
      <AppBar position="fixed" style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: 100 }} />
          <nav style={{ alignItems: 'center'}}>
            <a href="#home" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }} onClick={() => navigate('/Login')}>Home</a>
            <a href="#tests" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }}>Tests</a>
            <a href="#results" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }}>Résultats</a>
            <a href="#more" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }}>Plus</a>
          </nav>
          <Button variant="outlined" color="primary" style={{ backgroundColor: '#fff', color: '#000000', padding: '10px 20px', borderRadius: 30, cursor: 'pointer', width: 'auto', marginRight: '3%', border: '2px solid #232A56' }} onClick={() => navigate('/Test1')}>Créer un test</Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h1" style={{ marginTop: '15%', fontSize: '3.5em', fontStyle: 'italic' }}>Créer un test</Typography>

      <Container style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', width: '50%', margin: '3%', height: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h2" style={{ fontSize: '1.5em', color: 'rgba(35, 42, 86, 0.66)', textAlign: 'center', paddingBottom: '5%' }}>Inviter des candidats</Typography>
          <div style={{ maxHeight: 130, overflowY: 'auto', width: '100%' }}>
            {candidates.map((candidate, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <TextField
                  type="text"
                  name="name"
                  placeholder="Entrer le nom du candidat"
                  value={candidate.name}
                  onChange={(e) => handleCandidateChange(index, e)}
                  variant="outlined"
                  style={{ width: '50%', padding: 5, borderRadius: 30, fontSize: '1em' }}
                />
                <TextField
                  type="email"
                  name="email"
                  placeholder="Entrer l’email du candidat"
                  value={candidate.email}
                  onChange={(e) => handleCandidateChange(index, e)}
                  variant="outlined"
                  style={{ width: '50%', padding: 5, borderRadius: 30, fontSize: '1em'}}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <Button type="button" variant="contained" color="primary" style={{ borderRadius: 30, width: '20%', backgroundColor: 'rgba(35, 42, 86, 0.66)', color: '#000', cursor: 'pointer' }} onClick={handleAddCandidate}>Ajouter</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: 30, width: '45%', backgroundColor: '#232A56', color: '#fff', border: 'none', cursor: 'pointer', marginTop: 10 }}>Visualiser le test</Button>
            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: 30, width: '45%', backgroundColor: '#232A56', color: '#fff', border: 'none', cursor: 'pointer', marginTop: 10 }}>Envoyer le test</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Test3;
