import React, { Component } from 'react'
import {connect} from 'react-redux'
import addPerson from '../redux/action/person_action'
import {nanoid} from 'nanoid'

class Person extends Component {
    onClick = () => {
        this.props.add({"id": nanoid(), "name": this.name.value, "age": this.age.value})
    }

    onNameChange = () => {

    }

    onAgeChange = () => {

    }

    render() {
        const {persons, counter} = this.props
        return (
            <div>
                <span>counter: {counter}</span><br/>
                <input ref={(n) => this.name = n}  onChange={this.onNameChange}/>
                <input ref={(n) => this.age = n}  onChange={this.onAgeChange}/>
                <button onClick={this.onClick}>添加</button>

                <ul>
                    {persons.map((person) => (<li name="111" key={person.id}>{person.name+"--" +person.age}</li>))}
                </ul>
            </div>
        )
    }
}

export default connect((state) => ({"persons": state.persons, "counter": state.counter}), {
    add: addPerson
})(Person)
