import React, {useEffect, useState} from 'react'
import "./form.css"

function Form( {addContact , contacts} ) {
const DefaultFormValue = { fullname : "" , phone : ""}
const [form,setForm] = useState(DefaultFormValue)

useEffect(() => {
    setForm(DefaultFormValue);
}, [contacts])

const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullname === "" || form.phone === ""){
        return false
    }
    addContact([...contacts , form])    
}

const handleForm = (e) => {
    setForm({...form , [e.target.name] : e.target.value})
}    
  return (
    <>
        <form onSubmit={onSubmit} action="" className='form-control'>
            <div className="input-box">
                <input name='fullname' value={form.fullname} id='name' type="text" placeholder='Full Name' onChange={handleForm}/>
            </div>
            <div className="input-box">
                <input name='phone' id='phone' value={form.phone} type="text" placeholder='Phone Number' onChange={handleForm}/>
            </div>
            <button className='btn'>Add Contact</button>
        </form>
    </>
  )
}

export default Form