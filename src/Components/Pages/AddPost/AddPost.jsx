import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import BlogDataService from "../../../services/services"

import './AddPost.css'

export default function AddPost({ token }) {
  const [data, setData] = useState({
    title: "",
    content1: "",
    content2: "",
    content3: "",
    resume: "",
    principal_image: null,
    image1: null,
    image2: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = () => {
        BlogDataService.createBlog(data, token)
        .then((response) => {
            setSubmitted(true);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>
      <Container>
        {token == null || token === "" ? (
          <Alert variant="warning">
            You are not logged in. Please <Link to={"/login"}>login</Link> to
            see your posts.
          </Alert>
        ) : (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            className="form-container"
          >
            <FormControl className="mb-3">
              <InputLabel required={true}>Titulo</InputLabel>
              <Input
                type="text"
                placeholder="Titulo"
                name="title"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl className="mb-3">
              <InputLabel>Contenido principal</InputLabel>
              <Input
                type="text"
                name="content1"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl className="mb-3">
              <InputLabel>Contenido adicional</InputLabel>
              <Input
                type="text"
                name="content2"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl className="mb-3">
              <InputLabel>Contenido adicional</InputLabel>
              <Input
                type="text"
                name="content3"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl className="mb-3">
              <InputLabel>Resumen</InputLabel>
              <Input
                type="text"
                name="resume"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl className="mb-3 input-field">
              <InputLabel>Imagen principal</InputLabel>
              <Input
                type="file"
                accept="image/jpeg, image/jpg, image/png, image/webp"
                name="principal_image"
                required
                onChange={handleChange}
                />
            </FormControl>
            <FormControl className="mb-3 input-field">
              <InputLabel>Imagen opcional</InputLabel>
              <Input
                type="file"
                accept="image/jpeg, image/jpg, image/png, image/webp"
                name="image1"
                onChange={handleChange}
              />
            </FormControl>
            <Button variant="primary" onClick={handleSubmit}>
              Agregar post
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
}
