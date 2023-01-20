import React from 'react'
import Events from './data'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


const AppContent = () => {
    const [people,SetPeople] = useState(Events);

    const removeEvent = (id) =>{
        SetPeople(people => people.filter(person => person.id !== id));
    };
    const reloadEvent = () =>{
        SetPeople(Events);
    };
    const removeAll = () =>{
        SetPeople(people.slice(0,0))
    };
  return (
    <React.Fragment>
    <div className='container d-flex justify-content-center flex-column align-items-center item-list col-5 my-5'>
        {people.map(el=>{
        return <div className='item' key={el.id}>
                    <div className='foto'>
                        <img src={el.img}></img>
                    </div>
                    <div className='mx-3 description d-flex'> 
                        <div>
                            <span>{el.nome}</span>
                            <p>{el.stato}</p>
                        </div>
                        <div className='delete'>
                        <FontAwesomeIcon icon={faDeleteLeft} onClick={()=>removeEvent(el.id)}/>
                        </div>                        
                    </div>           
                </div>})}
    </div>
    <div className={people.length==0 ? "container col-5 text-center my-5" : "d-none"}>
        <span className='fs-1'>Non ci sono eventi che ti interessano, prova ad aggiornare la lista!</span>
    </div>
    <div className='container col-5 justify-content-between d-flex'>
        <button className='btn btn-primary' onClick={reloadEvent}>Ricarica eventi</button>     
        <button className={people.length > 0 ? "btn btn-outline-danger" : "d-none"} onClick={removeAll}>Rimuovi tutti</button>
    </div>
    </React.Fragment>     
  )
}

export default AppContent