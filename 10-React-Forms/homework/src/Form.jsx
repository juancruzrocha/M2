import React, { useState } from 'react';
import './estilos.module.css'

export function validate (input) {
  let errors = {};
  if (!input.username) {
      errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid'
  }

  if (!input.password) {
      errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = 'Password is invalid'
  }

  return errors;
}


export default function Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const [errors , setErrors] = useState({})
  
  // sirve para manejar los cambios en el input y como tengo dos estados lo tengo que hacer de esta manera
  // ...input copia lo que teniamos antes
  const handleInputChange = function (e) {
    setInput(
      {
        ...input,      // copia lo que teniamos en input y luego le agrega...
        [e.target.name]: e.target.value, // lo de la izquierda va a crear un propiedad con el valor .name y le va a asignar el valor e.target.value   
      }
    )

    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

  


  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" className={errors.username && 'danger'} onChange={(e) => handleInputChange(e)} value={input.username} />
        {
          errors.username && (
            <p className='danger'>{errors.username}</p>
          )
        }
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" className={errors.password && 'danger'} onChange={(e) => handleInputChange(e)} value={input.password} />
        {
          errors.password && (
            <p className='danger'>{errors.password}</p>
          )
        }
      </div>
      <input name="submit" type="submit" />
      
    </form>

  )
}
  