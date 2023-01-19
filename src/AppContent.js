import React from 'react'
import Events from './data'
import { useState } from 'react'
const AppContent = () => {
    const [people,SetPeople] = useState(Events);
  return (
    <div className='container d-flex justify-content-center flex-column align-items-center'>
        {people.map(el=>{
        return <div className='item col-5'>
                    <img src={el.img}></img>
                    <span>{el.nome}</span>
                    
                    <p>{el.stato}</p>
            </div>
    })}</div>
  )
}

export default AppContent