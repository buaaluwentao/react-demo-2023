import React, { Component } from 'react'

export default class Counter extends Component {
    add = () => {
        this.props.add(1)
    }

    render() {
        return (
            <div>
                <div>当前值：{this.props.counter}</div>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
