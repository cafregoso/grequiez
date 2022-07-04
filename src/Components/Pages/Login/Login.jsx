import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Login = ({ login }) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const logIn = () => {
      login({ username: username, password: password });
      navigate('/blog')
    };
  
    return (
      <Container>
        <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
          <FormControl className="mb-3">
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={onChangeUsername}
            />
          </FormControl>
          <FormControl className="mb-3">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={onChangePassword}
            />
          </FormControl>
          <Button variant="primary" onClick={logIn}>
            Login
          </Button>
        </Box>
      </Container>
    );
  }
  
  export default Login