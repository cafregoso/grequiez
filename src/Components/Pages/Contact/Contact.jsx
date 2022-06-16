import React from 'react'
import { Formik, useFormik  } from 'formik'

import './Contact.css'

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },

    onSubmit: values => console.log(values)
  })
  return (
    <div>
      <form onSubmit={ formik.handleSubmit }>
        <label>Nombre</label>
        <input
          name='name'
          type='text'
          onChange={ formik.handleChange }
          value={ formik.values.name }
        />
        <label>Email</label>
        <input
          name='email'
          type='email'
          onChange={ formik.handleChange }
          value={ formik.values.email }
        />
        <label>Compania / Organizacion</label>
        <input
          name='company'
          type='text'
          onChange={ formik.handleChange }
          value={ formik.values.company }
        />
        <label>Mensaje</label>
        <input
          name='message'
          type='text'
          onChange={ formik.handleChange }
          value={ formik.values.message }
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
