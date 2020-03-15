import React from 'react'
import Form from './Form'
import View from './View'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',number: '0401234567' }
      ],
      newName: '',
      newNumber: ''
    }
  }
  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        this.setState({ persons: response.data })
      })
  }
  remove = (id) => {
    this.setState(
      {persons: this.state.persons.filter(person => person.id !== id)}
    )
  }

  addPerson = (event) => {
    event.preventDefault()
    const names = this.state.persons.map(person => person.name)
    const newPerson = {name: this.state.newName, number: this.state.newNumber}

    if(names.indexOf(this.state.newName) === -1){
      this.setState({persons: this.state.persons.concat(newPerson)}) 
      axios.post('http://localhost:3001/persons', newPerson)
      .then(response => {
      console.log(response)
      })
    }else{
      alert('henkilö on jo listassa')
    }
  }
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    console.log('render')
    return (
      <div>
        <Form state={this.state} addPerson={this.addPerson} handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange}/>
        <View state={this.state} remove={this.remove}/>
      </div>
    )
  }
}

export default App
