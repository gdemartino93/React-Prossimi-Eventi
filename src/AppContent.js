import React from 'react'
import Events from './data'
import { useState } from 'react'
const AppContent = () => {
    const [people,SetPeople] = useState(Events);
  return (
    <div className='container d-flex justify-content-center flex-column align-items-center item-list col-5 my-5'>
        {people.map(el=>{
        return <div className='item'>
                    <div className='foto'>
                        <img src={el.img}></img>
                    </div>
                    <div className='mx-3 description'> 
                        <span>{el.nome}</span>
                        <p>{el.stato}</p>
                    </div>

                    
                    
            </div>
    })}</div>
  )
}

export default AppContent