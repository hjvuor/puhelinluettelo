import React from 'react'
import axios from 'axios'

const View = ({state, remove}) => {
    return(
        <div>
        <h2>Numerot</h2>
        {state.persons.map(person=> <Person remove={remove} state={state} key = {person.name} name = {person.name} number={person.number}></Person>)}
        </div>
    )
}
const Person = (props) => {

    const removePerson = (name, number) => {
        const removedPerson = props.state.persons.find(person => person.name === name)
        console.log('poistetaan ' + name)
        console.log(removedPerson)  



        if(window.confirm('haluatko varmasti poistaa henkilön '+ name + '?')){
            axios.delete(`http://localhost:3001/persons/${removedPerson.id}`,removedPerson).then(
                props.remove(removedPerson.id),
                console.log('poistettu')
            ).catch(error => {
                alert('henkilö on jo poistettu')
                props.remove(removedPerson.id)
              })
        }
        
    }

    return(
        <div>
            <span>{props.name} {props.number}</span>
            <button onClick={() => removePerson(props.name, props.number)}>poista</button>
        </div>
    )
}
export default View