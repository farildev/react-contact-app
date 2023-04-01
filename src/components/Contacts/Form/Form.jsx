import React, {useState} from 'react'

function Form() {
    const handleForm = (e) => {
        e.preventDefault();
    }
    
    const [contacts, setContats] = useState([]);

  return (
    <>
        <form action="">
            <div className="input-box">
                <label htmlFor="name">Full Name</label>
                <input id='name' type="text" placeholder='Full Name'/>
            </div>
            <div className="input-box">
                <input id='phone' type="text" placeholder='Phone Number' />
            </div>
            <button onClick={handleForm} className='btn'>Add Contact</button>
        </form>
    </>
  )
}

export default Form