import React from 'react'


const Form = (props) => {
        return(
        <div>
            <form onSubmit={props.addPerson} >
              <h2>Puhelinluettelo</h2>
              <div>
                nimi: <input
                        value={props.state.newName}
                        onChange={props.handleNameChange}
                      />
              </div>
              <div>
                numero: <input
                        value={props.state.newNumber}
                        onChange={props.handleNumberChange}
                        />
              </div>
              <div>
                <button type="submit">lisää</button>
              </div>
            </form>
        </div>
        )
    }
export default Form