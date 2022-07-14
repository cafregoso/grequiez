import React from 'react'
import { useFormik } from 'formik'

const Contact = () => {
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
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <br />
        <input
          name='name'
          type='text'
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name='email'
          type='email'
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label>Compañía</label>
        <br />
        <input
          name='company'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.company}
        />
        <br />
        <label>Mensaje</label>
        <br />
        <textarea
          name='message'
          required
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        <br />
        <button type='submit'>Enviar</button>
      </form>
      <section>
      </section>
    </div>
  )
}

export default Contact
