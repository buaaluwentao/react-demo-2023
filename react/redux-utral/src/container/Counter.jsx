import React, { Component } from 'react'
import {connect} from 'react-redux'
import counterAction from '../redux/action/counter_action'

class Counter extends Component {
    
    add = () => {
        const {add} = this.props
        add(1)
    }
    
    render() {
        const {counter, personsNum} = this.props
        return (
            <div>
                <span>人员数量：{personsNum}</span><br/>
                <button onClick={this.add}>点击加1</button>&nbsp;<span>{counter}</span>
            </div>
        )
    }
}

export default connect((state) => ({"counter": state.counter, "personsNum": state.persons.length}), {
    add: counterAction
})(Counter)
