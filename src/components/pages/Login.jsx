
import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

export default function Login() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/about');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (

    <group>

<div className='min-h-screen mt-15'>
      <div className='flex p-3 mt-5  mx-auto flex-col md:flex-row  gap-5'>
        {/* left */}
        <div className='message'>
        <div className='flex-1'>
          <Link to='/Signup' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-lg text-white'>
             Welcome Back
            </span>
            
          </Link>
          <p className='text-l mt-5'>
          Exchange rates got you feeling like you're on a rollercoaster? <br/>Hang on tight, we're here to make your ride smooth!.<br/>
          Exchange rates today are like the weather - unpredictable! But don't worry, we've got you covered rain or shine.
          </p>
        </div>
        </div>
        {/* right */}
        {/* right */}
        <div className="form-container"> 
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button className='button flex items-center justify-center'
  gradientDuoTone='purpleToPink'
  type='submit'
  disabled={loading}
>
  {loading ? (
    <>
      <Spinner size='sm' />
      <span className='pl-3'>Loading...</span>
    </>
  ) : (
    'Login'
  )}
</Button>

          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/Signup' className='text-blue-500'>
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
    </div>

   </group>
  );
}
