import React , {useState} from 'react'
import Form from "../Contacts/Form/Form"
import List from "../Contacts/List/ListEl"
import "./contact.css"
const Contact = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className='contact'>
        <div className="contact__header">
          <h2>Contact App</h2>
        </div>
        <List contacts={contacts} />
        <Form addContact = {setContacts} contacts = {contacts} /> 
    </div>
  )
}

export default Contact