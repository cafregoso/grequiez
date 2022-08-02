import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import moment from "moment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Banner from '../../PagesComponents/Banner/Banner'
import TextBox from '../../PagesComponents/TextBox/TextBox'
import Space from '../../PagesComponents/Space/Space'

import BlogDataService from "../../../services/services";

import "./BlogPost.css";

export default function BlogPost({ token, user, logout }) {
  const id = useParams().id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const retrieveTodos = () => {
      BlogDataService.getOne(token, id)
        .then((response) => {
          setPost(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    retrieveTodos();
  }, [id, token]);

  return (
    <div className="blogpost-container">
      {token == null || token === "" ? (
        ""
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="" style={{ boxShadow: "none" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user}
              </Typography>
              <Button color="inherit" href="/"></Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
          minHeight: "80vh"
        }}
      >
        {
          post && 
          <Fragment>
            <h2 style={{ color: 'var(--color-verdeoscuro)', fontSize: '40px', marginBottom: '0' }}>{ post.title }</h2>
            <section>
              <p style={{ textAlign: 'end', padding: '10px 45px', marginTop: '0' }}>{moment(post.created).format("ll")}</p>
              <Banner img={ post.principal_image } alt={`Grupo Requiez Blog - ${ post.title }`} />
            </section>
            <section style={{ minHeight: '200px', width: '100%' }}>
              <TextBox 
                text1={ post.resume }
                color='#FFF'
                colorletter='var(--color-verdeoscuro)'
              />
            </section>
            <section className="blogpost-image" style={{ 
                gridTemplateColumns: post.image1 ? '50% 50%' : '100%'
              }}
            >
              {
                post.image1 ? (
                  <Fragment>
                    <div>
                      <img src={ post.image1 } alt={`Grupo Requiez Post - ${ post.title }`}  />
                    </div>
                    <div>
                      <p>{ post.content1 }</p>
                    </div>
                  </Fragment>
                ) : (
                  <div>
                    <p>{ post.content1 }</p>
                  </div>
                )
              }
            </section>
            <section style={{ 
                width: '100%',
                display: 'grid',
                gridTemplateColumns: post.content3 ? '1fr 1fr' : '1fr',
                placeItems: 'center',
                gap: '50px'
              }}
            >
              {
                post.content2 &&
                  <div>
                    <p>{ post.content2 }</p>
                  </div>
              }
              {
                post.content3 &&
                  <div>
                    <p>{ post.content3 }</p>
                  </div>
              }
            </section>
          </Fragment>
        }
      </Container>
    </div>
  );
}
