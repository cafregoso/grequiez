import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import moment from "moment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import BlogDataService from "../../../services/services";

import "./Blog.css";

export default function Blog({ token, user, logout }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const retrieveTodos = () => {
      BlogDataService.getAll(token)
        .then((response) => {
          setBlogs(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    retrieveTodos();
  }, [token]);

  return (
    <div>
      {token == null || token === "" ? (
        ""
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="" style={{ boxShadow: 'none' }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                { user }
              </Typography>
              <Button color="inherit" href="/"></Button>
              <Button color="inherit" onClick={ logout }>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
      <Container
        style={{ display: "flex", justifyContent: "center", gap: "35px", flexWrap: 'wrap' }}
      >
        {blogs.map(({ id, title, resume, created, principal_image, user }) => (
          <Card sx={{ maxWidth: 450, maxHeight: 500, boxShadow: 'none' }} key={id}>
            <CardMedia
              component="img"
              alt={`Blog ${title}`}
              image={principal_image}
              style={{ maxHeight: 300, objectFit: "cover" }}
            />
            <div style={{ display: 'grid', justifyContent: 'space-between', height: '200px' }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  {moment(created).format("ll")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#000' }}
                  style={{ marginBottom: "10px" }}
                >
                  {`Creado por: ${user}`}
                </Typography>
                <Typography sx={{ color: 'var(--color-verdeoscuro)', fontSize: '18px', fontWeight: '600' }} gutterBottom variant="h5" component="div">
                  {title.toUpperCase()}
                </Typography>
                <Typography  variant="body2" sx={{ color: '#000' }}>
                  {resume}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  sx={{ color: 'var(--color-verdeoscuro)' }} 
                  size="small" 
                  component={ Link }
                  to={ `/blog/${ id }` }
                >
                  Leer más
                </Button>
              </CardActions>
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
}
