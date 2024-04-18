import React from 'react'
import './second.css'
import { FaSearch } from 'react-icons/fa'

function Searchlist({TitleArray,setSearchQuery}) {
  return (
    <>
      <div className='Container-Searchlist'>
        {
          TitleArray.map(m=>{
            return <p key={m} 
            onClick={e=>setSearchQuery(m)}
            className='titleitem' >
            <FaSearch />
            {m}
          </p>
          })
        }
      </div>
    </>
  )
}

export default Searchlist