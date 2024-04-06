import React,{useState} from 'react'
import { loginFields } from './FormConstants'
import { Input } from './Input';
const fields = loginFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='' );

const Login = () => {
    const [login, setLogin]= useState(fieldsState);
    const handleChange = (e)=>{
          setLogin({...fieldsState,[e.target.id]:e.target.value})
          
    }

    
  return (
    <div>
       <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={login[field.id]}
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
        </div>
        
      </form>
    </div>
  )
}

export default Login
