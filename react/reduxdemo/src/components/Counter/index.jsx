import React, { Component } from 'react'
import store from './Store'
import actionCreator from './ActionCreator'

export default class Counter extends Component {
    add = () => {
        store.dispatch(actionCreator(1))
    }

    // componentDidMount = () => {
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    render() {
        return (
            <div>
                <div>当前值：{store.getState()}</div>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
