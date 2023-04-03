import React  from 'react'
import "./list.css"
function ListEl({ contacts })  {

  //Contacts propsu vasitəsilə contact dəyərlərini parent elementdən alıb list componentində view-a çıxardırıq.(Arraylar üçün map metodu)
  //Contacts map edildikdə hər döngüdə bizə bir contact elementi qaytarır.
  //Bu elementi li etiketi içərisində ekrana yazdırırıq və onun indexini key olaraq mənimsədirik.

  return (
    <div className='list'>
      <div className="list__header">
        <h4>My Contacts</h4>
      </div>
      <ul className="list__box">
        {contacts.map((contact,index) => 
        (<li className='list__item' key={index}>
          <span>{contact.fullname}</span>
          <span>{contact.phone}</span>
        </li>))
        }
      </ul>
    </div>
  )
}

export default ListEl