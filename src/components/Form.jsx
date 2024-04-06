import React,{useState} from 'react'
import { formsFields } from './FormConstants';
import { Input } from './Input';

const fields = formsFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Form = () => {
    const [form, setForm]= useState(fieldsState);
    const handleChange = (e)=>{
        setForm({...fieldsState,[e.target.id]:e.target.value})
        
  }
    return (
        <div >
           
          <form className='mx-auto'>
          {
           fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={form[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                )
            }
          </form>
        </div>
    )

}

export default Form
