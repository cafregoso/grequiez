import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import Banner from '../../PagesComponents/Banner/Banner'
import axios from 'axios'

import banner from '../../../assets/work-with-us.jpg'
import { color } from '@mui/system'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WorkWithUs = () => {
  const [state, setState] = useState({"name": '', "email": '', "message": ''})
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const form = new FormData()
  
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  
  const handleChangePdf = (e) => {
    form.append(e.target.name, e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.append('name', state.name)
    form.append('email', state.email)
    form.append('message', state.message)
    axios({
      method: "POST",
      url: "https://api.gruporequiez.com/work-with-us/",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(res => {
      if (res.status === 200) {
        setMessage(res.data)
        handleOpen(true)
        e.target.reset()
      }
      else {
        setMessage(res.data)
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='contact'>
      <Banner img={ banner } />
      <main style={{
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: 'auto',
        width: '50%',
        margin: '100px auto'
      }}>
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            sx={{
              margin: '20px auto'
            }}
            name='name'
            type='text'
            required
            label='Nombre'
            variant="standard"
            color='success'
            fullWidth
            onChange={handleChange}
            value={state.name}
          />
          <br />
          <TextField
            sx={{
              margin: '20px auto'
            }}
            name='email'
            type='email'
            required
            label='Email'
            variant="standard"
            color='success'
            fullWidth
            onChange={handleChange}
            value={state.email}
          />
          <br />
          <TextField
            sx={{
              margin: '20px auto'
            }}
            name='message'
            required
            label='Área de interés'
            variant="standard"
            color='success'
            fullWidth
            onChange={handleChange}
            value={state.message}
          />
          <br />
          <div 
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px auto'
            }}
          >
            <Button
              variant="outlined" 
              component="label"
              sx={{
                color: 'var(--color-verdeoscuro)',
                borderColor: 'var(--color-verdeoscuro)',
                marginBottom: '25px'
              }}
            >
              Sube tu CV
              <input 
                hidden 
                accept='application/pdf' 
                name='file' 
                type="file"
                onChange={handleChangePdf}
              />
            </Button>
            <div>
              <a
                href='https://linkedin.com/company/grupo-requiez/'
                target='_blank'
                rel='noreferrer'
                style={{
                  textDecoration: 'none'
                }}
              >
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--color-gris)'
                }}
              >
                Sigue nuestro LinkedIn para conocer<br/>
                más de nuestras vacantes.
              </p>
              </a>
            </div>
          </div>
          <Button 
            type='submit'
            sx={{
              width: '100%',
              color: 'var(--color-verdeoscuro)',
              borderColor: 'var(--color-verdeoscuro)',
            }}
            variant='outlined'
          >
            Enviar
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {message}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Gracias por tu mensaje. Nos pondremos en contacto
                contigo lo antes posible.
              </Typography>
            </Box>
          </Modal>
        </form>
      </main>
    </div>
  )
}

export default WorkWithUs
