import React,{useState} from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
	<div className="main-container">

	
    <div className="flexlogin"> 
      Login Form
    </div>
	<div className='logindiv'>
      <Container maxWidth="xs" >
        <Box sx={{ mt: 8, p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit} id="loginForm">
            <TextField
              fullWidth
              margin="normal"
              id="login-username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              id="login-password"
              label="Password"
              type="password"
              variant="outlined"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox id="remember-me" name="remember-me"    checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}/>}
              label="Remember Me"
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
	  </div>
	</div>
  );
}
