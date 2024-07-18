import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import axios from 'axios';

function Test2() {
  const [searchQuery, setSearchQuery] = useState('');
  const [competencies, setCompetencies] = useState([]);
  const [selectedCompetencies, setSelectedCompetencies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`http://localhost:8088/api/competencies/search, { params: { query: searchQuery } }`)
        .then(response => {
          setCompetencies(response.data);
        })
        .catch(error => console.error(error));
    } else {
      setCompetencies([]);
    }
  }, [searchQuery]);

  const handleAddCompetency = (competency) => {
    setSelectedCompetencies(prevState => [...prevState, competency]);
    setSearchQuery('');
    setCompetencies([]);
  };

  const handleRemoveCompetency = (competencyToRemove) => {
    setSelectedCompetencies(prevState =>
      prevState.filter(competency => competency.id !== competencyToRemove.id)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCompetencies.length === 0) {
      alert("Veuillez sélectionner au moins une compétence.");
      return;
    }
    console.log(selectedCompetencies);
    navigate('/Test3');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f0f0f0 65%, #232A56 35%)',
        color: '#000',
        overflowX: 'hidden',
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src={logo} alt="Logo" style={{ width: 170, height: 70, marginLeft: '2%' }} />
          <Box sx={{ display: 'flex', marginLeft: '15%' }}>
            <Link href="#home" onClick={() => navigate('/Login')} sx={{ margin: '15%', color: '#000', textDecoration: 'none', '&:hover': { fontSize: '1.1em' } }}>Home</Link>
            <Link href="#tests" onClick={() => navigate('/TestList')} sx={{ margin: '15%', color: '#000', textDecoration: 'none', '&:hover': { fontSize: '1.1em' } }}>Tests</Link>
            <Link href="#results" sx={{ margin: '15%', color: '#000', textDecoration: 'none', '&:hover': { fontSize: '1.1em' } }}>Résultats</Link>
            <Link href="#more" sx={{ margin: '15%', color: '#000', textDecoration: 'none', '&:hover': { fontSize: '1.1em' } }}>Plus</Link>
          </Box>
          <Button
            onClick={() => navigate('/Test1')}
            sx={{
              marginLeft: '30%',
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: 30,
              cursor: 'pointer',
              width: '10%',
              border: '2px solid #232A56',
              '&:hover': {
                backgroundColor: '#232A56',
                color: '#fff',
                transform: 'scale(1.1)',
              },
            }}
          >
            Créer un test
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" sx={{ margintop: '15vh', fontSize: '3.5em', fontStyle: 'italic' }}>
        Créer un test
      </Typography>

      <Container sx={{ backgroundColor: '#fff', padding: 3, borderRadius: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', margin: 3 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h2" style={{ fontSize: '1.3em', color: '#000', textAlign: 'Left', paddingBottom: '3%'}}>Quelles compétences souhaitez-vous tester ?</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
            {selectedCompetencies.map((competency, index) => (
              <Chip
                key={index}
                label={competency.language}
                onDelete={() => handleRemoveCompetency(competency)}
                sx={{ marginBottom: '8px' }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 2, position: 'relative' }}>
            <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '1%', color: '#aaa', fontSize: '16px' }} />
            <InputBase
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                padding: '10px 40px',
                borderRadius: 30,
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '1em',
              }}
            />
          </Box>
          <List sx={{ maxHeight: '200px', overflowY: 'auto', marginBottom: 2 }}>
            {competencies.map((competency, index) => (
              <ListItem key={index} button onClick={() => handleAddCompetency(competency)}>
                <ListItemText primary={competency.language} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Button type="submit" variant="contained" onClick={() => navigate('/Test1')} sx={{ backgroundColor: '#232A56', borderRadius: 30, padding: '10px', marginTop: 1, width:'40%' }}>
              Retour
            </Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#232A56', borderRadius: 30, padding: '10px', marginTop: 1, width:'40%'}} onClick={() => navigate('/Test3')}>
              Suivant
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Test2;