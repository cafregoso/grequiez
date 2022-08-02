import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import Banner from '../../PagesComponents/Banner/Banner'
import axios from 'axios'

import './Contact.css'

import banner from '../../../assets/contact.jpg'

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

const Contact = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    onSubmit: values => {
        axios.post("https://api.atoyacci.com/sendmail/", values)
        .then(response => {
          if (response.status === 200) {
            setMessage(response.data)
            handleOpen(true)
            formik.resetForm()
          }
          else {
            setMessage(response.data)
          }
        })
        .catch(err => {
          console.log(err)
        })
      }
  }) 

  return (
    <div className='contact'>
      <Banner img={ banner } />
      <main>
        <form onSubmit={formik.handleSubmit}>
          <br />
          <TextField
            name='name'
            type='text'
            required
            label='Nombre'
            variant="standard"
            color='success'
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br />
          <TextField
            name='email'
            type='email'
            required
            label='Email'
            variant="standard"
            color='success'
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          <TextField
            name='company'
            type='text'
            required
            label='Compañía'
            variant="standard"
            color='success'
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.company}
          />
          <br />
          <TextField
            name='message'
            required
            label='Mensaje'
            variant="standard"
            color='success'
            fullWidth
            multiline
            rows={5}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <br />
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
        <section>
          <h2>CONTÁCTANOS</h2>
          <div>
            <h4>Guadalajara</h4>
            <p>
              Avenida Paseo Punto Sur #312<br/>
              Nivel 1, Interior V2,<br/>
              Corporativo Punto Sur<br/>
              CP. 45645.<br/>
              Tlajomulco de Zúñiga, Jalisco.<br/>
              <a href="tel:3338337788">+52 (33) 3833 7788</a>
            </p>
          </div>
          <div>
            <h4>CDMX</h4>
            <p>
              Volcán #150<br/>
              Lomas de Chapultepec, V Sección<br/>
              Ciudad De México<br/>
              CP. 11000<br/>
              <a href="tel:5527909519">+52 (55) 2790 9519</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact