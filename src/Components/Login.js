import React, { useState } from 'react'

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })

  const updateForm = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }

  const loginUser = (e) => {
    e.preventDefault()
    // Send a POST request with the loginInfo object
    fetch('http://127.0.0.1:8000/users', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: loginInfo.name,
        password: loginInfo.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Success
          console.log('Logged in successfully')
          // Reset the form fields
          setLoginInfo({
            username: '',
            password: '',
          })
        } else {
          // Error
          console.log('Failed to log in')
        }
      })
      .catch((error) => {
        console.log('Error in logging in:', error)
      })
  }

  return (
    <>
      <form onSubmit={loginUser}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={loginInfo.username}
          onChange={updateForm}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={loginInfo.password}
          onChange={updateForm}
        />
        <button type='submit'>sign up</button>
      </form>
    </>
  )
}

export default Login
