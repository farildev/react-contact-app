import React, {useEffect, useState} from 'react'
import "./form.css"

function Form( {addContact , contacts} ) { // Propslar vasitəsilə Parent componentdə olan dataları Form componentimizə ötürürük.
const DefaultFormValue = { fullname : "" , phone : ""} // Bu hissədə inputları seçirik.
const [form,setForm] = useState(DefaultFormValue) //input dəyərlərini useState-ə mənimsədirik.

useEffect(() => {
    setForm(DefaultFormValue);
}, [contacts]) // useEffect istifadə edərək qiymət göndərildikdən sonra formun input dəyərlərinin sıfırlanmasını təmin edirik.

const onSubmit = (e) => {
    e.preventDefault(); // Səhifə yenilənməsinin qarşısını almaq
    if(form.fullname === "" || form.phone === ""){
        return false 
    } // Əgər inputların daxili boşdursa, dəyəri false qaytar deyirik və heç bir qeyd olunma baş vermir.
    addContact([...contacts , form]) // Keçmiş qeyd edilən kontaktları da bura mənimsədirik ki silinməsin  və onSubmit olduqda form state-nə qeyd olunsun.  
    
    // Formumuz submit olduqda baş verəcək eventləri qeyd edirik.
}

const handleForm = (e) => {
    setForm({...form , [e.target.name] : e.target.value})

    //Handle form vasitəsilə formumuzu və onun hədəf dəyərlərini manipulyasiya edə bilirik. Həmçinin formun keçmiş qiymətlərini yazdırırıq.
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