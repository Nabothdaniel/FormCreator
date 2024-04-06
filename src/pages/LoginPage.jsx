import React from 'react'
import Header  from '../components/Header'
import Login from '../components/Login'
import FormAction from '../components/FormAction'
import  FormExtra  from '../components/FormExtra'


const LoginPage = () => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    authenticateUser()
}

const authenticateUser = ()=>{
    console.log('authenticating.....')
}
  return (
    <div className='flex  justify-center items-center mt-24' >
      <section>
      <Header
       heading="Login to your account"
       paragraph="Don't have an account yet? "
       linkName="Signup"
       linkUrl="/signup"
      />
      <Login/>
      <FormAction handleSubmit={handleSubmit} text='Login'/>
      <FormExtra/>
      </section>
    </div>
  )
}

export default LoginPage
