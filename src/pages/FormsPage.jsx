import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import FormAction from '../components/FormAction';
import ImageUpload from '../components/ImageUpload';

const FormsPage = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        authenticateUser()
    }
    
    const authenticateUser = ()=>{
        console.log('authenticating.....')
    }
  return (
    <div className=' mx-6 md:mx-32 mt-24'>
        <section>
        <Header
                heading="Students Information"
                paragraph=" "
                linkName=""
                linkUrl=""
            />
        <Form/>
        <ImageUpload/>
        <FormAction handleSubmit={handleSubmit} text="Submit" />
        </section>
    </div>
  )
}

export default FormsPage
