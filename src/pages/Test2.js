import React, { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  Link,
} from '@mui/material';

function Test2() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [form1, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form1);
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
            <Link href="#tests" sx={{ margin: '15%', color: '#000', textDecoration: 'none', '&:hover': { fontSize: '1.1em' } }}>Tests</Link>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Button type="submit" variant="contained" onClick={() => navigate('/Test1')} sx={{ backgroundColor: '#232A56', borderRadius: 30, padding: '10px', marginTop: 1 }}>
              Retour
            </Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#232A56', borderRadius: 30, padding: '10px', marginTop: 1 }} onClick={() => navigate('/Test3')}>
              Suivant
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Test2;
