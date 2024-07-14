import React, { useState } from 'react';
import { TextField, Typography, Select, MenuItem, FormControl, InputLabel, Container, AppBar, Toolbar, Button, Box, Link } from '@mui/material';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Test1() {
  const navigate = useNavigate();
  const [form1, setForm] = useState({
    testName: '',
    domain: '',
    role: '',
    level: '',
  });

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

      <Typography variant="h2" sx={{ marginTop: '15vh', fontSize: '3.5em', fontStyle: 'italic' }}>
        Créer un test
      </Typography>

      <Container sx={{ backgroundColor: '#fff', padding: 3, borderRadius: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', margin: 3 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <TextField
              name="testName"
              placeholder="Entrer le nom du test"
              value={form1.testName}
              onChange={handleChange}
              variant="outlined"
              sx={{ padding: 1, fontSize: '1em', margin: 1, width: 'calc(50% - 20px)' }}
            />
            <FormControl variant="outlined" sx={{ padding: 1, fontSize: '1em', margin: 1, width: 'calc(50% - 20px)' }}>
              <InputLabel>Choisir le domaine</InputLabel>
              <Select
                name="domain"
                value={form1.domain}
                onChange={handleChange}
                label="Choisir le domaine"
              >
                <MenuItem value="">
                  <em>Choisir le domaine</em>
                </MenuItem>
                {/* Ajouter vos options de domaine ici */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <FormControl variant="outlined" sx={{ padding: 1, fontSize: '1em', margin: 1, width: 'calc(50% - 20px)' }}>
              <InputLabel>Choisir le rôle</InputLabel>
              <Select
                name="role"
                value={form1.role}
                onChange={handleChange}
                label="Choisir le rôle"
              >
                <MenuItem value="">
                  <em>Choisir le rôle</em>
                </MenuItem>
                {/* Ajouter vos options de rôle ici */}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ padding: 1, fontSize: '1em', margin: 1, width: 'calc(50% - 20px)' }}>
              <InputLabel>Choisir le niveau</InputLabel>
              <Select
                name="level"
                value={form1.level}
                onChange={handleChange}
                label="Choisir le niveau"
              >
                <MenuItem value="">
                  <em>Choisir le niveau</em>
                </MenuItem>
                {/* Ajouter vos options de niveau ici */}
              </Select>
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" onClick={() => navigate('/Test2')} sx={{ width: '40%', backgroundColor: '#232A56', color: '#fff', cursor: 'pointer', borderRadius: 30, margin: '0 auto' }}>
            Suivant
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Test1;
