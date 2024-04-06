const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

const formsFields = [
    {
        labelText:"Students Name",
        labelFor:"students-name",
        id:"students-name",
        name:"students-name",
        type:"text",
        autoComplete:"enter name",
        isRequired:true,
        placeholder:"Enter Name"    
    },
    {
        labelText:"DOB",
        labelFor:"dob",
        id:"dob",
        name:"dob",
        type:"text",
        autoComplete:"enter date of birth",
        isRequired:true,
        placeholder:"Enter date of birth"    
    },
    {
        labelText:"School Attended",
        labelFor:"school-attended",
        id:"school-attended",
        name:"school-attended",
        type:"text",
        autoComplete:"Enter school attended",
        isRequired:true,
        placeholder:"enter school attended"    
    },
]

export {loginFields,signupFields,formsFields}