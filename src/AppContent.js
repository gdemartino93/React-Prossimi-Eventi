import React from 'react'
import Events from './data'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


const AppContent = () => {
    const [people,SetPeople] = useState(Events);
  return (
    <div className='container d-flex justify-content-center flex-column align-items-center item-list col-5 my-5'>
        {people.map(el=>{
        return <div className='item'>
                    <div className='foto'>
                        <img src={el.img}></img>
                    </div>
                    <div className='mx-3 description d-flex'> 
                        <div>
                            <span>{el.nome}</span>
                            <p>{el.stato}</p>
                        </div>
                        <div className='delete'>
                        <FontAwesomeIcon icon={faDeleteLeft}/>
                        </div>

                        
                    </div>

                    
                    
            </div>
    })}</div>
  )
}

export default AppContent