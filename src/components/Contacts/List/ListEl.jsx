import React  from 'react'
import "./list.css"
function ListEl({ contacts }) {
  return (
    <div className='list'>
      <div className="list__header">
        <h4>My Contacts</h4>
      </div>
      <ul className="list__box">
        {contacts.map((contact,index) => 
        (<li className='list__item' key={index}>{contact.fullname}</li>))
        }
      </ul>
    </div>
  )
}

export default ListEl