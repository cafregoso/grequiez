import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import BlogDataService from "../../../services/services";

import "./AddPost.css";

export default function AddPost({ token, user }) {
  const [data, setData] = useState({
    title: "",
    content1: "",
    content2: "",
    content3: "",
    resume: "",
    principal_image: null,
    image1: null,
    image2: null,
    user: user
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BlogDataService.createBlog(data, token)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        setErrors(err)
        console.log(errors);
      });
    console.log(data);
  };

  return (
    <div>
      <Container>
        {token == null || token === "" ? (
          <Alert variant="warning">
            You are not logged in. Please <Link to={"/login"}>login</Link> to
            see your posts.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              required
              placeholder="Titulo"
              onChange={handleChange}
            />
            <input
              type="text"
              name="resume"
              placeholder="Resumen"
              onChange={handleChange}
            />
            <textarea
              name="content1"
              placeholder="Contenido principal"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <textarea
              name="content2"
              placeholder="Contenido adicional"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <textarea
              name="content3"
              placeholder="Contenido adicional"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <input
              type="file"
              name="principal_image"
              required
              accept="image/jpeg, image/jpg, image/png, image/webp"
              onChange={handleChangeImage}
            />
            <input
              type="file"
              name="image1"
              accept="image/jpeg, image/jpg, image/png, image/webp"
              onChange={handleChangeImage}
            />
            <input
              type="file"
              name="image2"
              accept="image/jpeg, image/jpg, image/png, image/webp"
              onChange={handleChangeImage}
            />
            <input type="submit" value="Guardar" />
          </form>
        )}
      </Container>
    </div>
  );
}
