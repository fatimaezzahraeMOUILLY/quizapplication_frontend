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
  Modal,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


const sampleQuestions = [
  {
    question: "Question 1",
    choices: ["Q11", "Q12", "Q13", "Q14"]
  },
  {
    question: "Question 2",
    choices: ["Q21", "Q22", "Q23", "Q24"]
  },
  {
    question: "Question3",
    choices: ["Q31", "Q32", "Q33", "Q34"]
  },
  {
    question: "Question 4",
    choices: ["Q41", "Q42", "Q43", "Q44"]
  }
];

function Test3() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([{ name: '', email: '' }]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleVisualizeTest = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, #f0f0f0 65%, #232A56 35%)', color: '#000', minHeight: '100vh' }}>
      <AppBar position="fixed" style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: 100 }} />
          <nav style={{ alignItems: 'center'}}>
            <a href="#home" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }} onClick={() => navigate('/Login')}>Home</a>
            <a href="#tests" style={{ margin: '0 25px', textDecoration: 'none', color: '#000', fontWeight: 'inherit', cursor: 'pointer' }} onClick={() => navigate('/TestList')}>Tests</a>
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
            <Button type="button" variant="contained" color="primary" style={{ borderRadius: 30, width: '45%', backgroundColor: '#232A56', color: '#fff', border: 'none', cursor: 'pointer', marginTop: 10 }} onClick={handleVisualizeTest}>Visualiser le test</Button>
            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: 30, width: '45%', backgroundColor: '#232A56', color: '#fff', border: 'none', cursor: 'pointer', marginTop: 10 }}>Envoyer le test</Button>
          </div>
        </form>
      </Container>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          <Typography variant="h4" gutterBottom style={{ fontSize: '1.5em', color: 'rgba(35, 42, 86, 0.66)', textAlign: 'center', paddingBottom: '5%' }}>
            Visualiser le test
          </Typography>
          {sampleQuestions.map((q, index) => (
            <Box key={index} sx={{
              mb: 2,
              p: 2,
              border: '1px solid #ccc',
              borderRadius: 2
            }}>
              <Typography variant="h6" style={{ marginBottom: 10 }}>{q.question}</Typography>
              <List>
                {q.choices.map((choice, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon>
                      <CircleIcon style={{ fontSize: '0.8em' }} />
                    </ListItemIcon>
                    <ListItemText primary={choice} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={handleCloseModal} style={{ borderRadius: 30, backgroundColor: '#232A56', color: '#fff', cursor: 'pointer', marginTop: 10 }}>Fermer</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Test3;
