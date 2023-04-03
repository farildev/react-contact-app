import React , {useState}  from 'react'
import "./list.css"
function ListEl({ contacts })  {

  const [filterText , setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
    )
  })

  //Contacts propsu vasitəsilə contact dəyərlərini parent elementdən alıb list componentində view-a çıxardırıq.(Arraylar üçün map metodu)
  //Contacts map edildikdə hər döngüdə bizə bir contact elementi qaytarır.
  //Bu elementi li etiketi içərisində ekrana yazdırırıq və onun indexini key olaraq mənimsədirik.

  return (
    <div className='list'>
      <div className="list__header">
        <h4>My Contacts</h4>
      </div>

      <div className="filter">
        <input value={filterText} placeholder='Search contacts' onChange={(e) => setFilterText(e.target.value)} />
      </div>

      <ul className="list__box">
        {filtered.map((contact,index) => 
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