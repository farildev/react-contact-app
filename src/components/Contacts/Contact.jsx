import React , {useState} from 'react'
import Form from "../Contacts/Form/Form"
import List from "../Contacts/List/ListEl"
import "./contact.css"
const Contact = () => {
  const [contacts, setContacts] = useState([]); // Form dəyərlərini contact arrayinin içərisini mənimsədirik və burada saxlayırıq.
  
  return (
    <div className='contact'>
        <div className="contact__header">
          <h2>Contact App</h2>
        </div>
        <List contacts={contacts} /> {/* Bu hissədə list elementinə kontaktlarımızı yazdırmaq dəyərləri yönləndiririk.   */}
        <Form addContact = {setContacts} contacts = {contacts} /> {/* addContact propsuna verdiyimiz setContacts dəyəri bizim üçün yeni kontakları təyin edir və həmin kontakları saxlayır.  */}
    </div>
  )
}

export default Contact