import React, { Component } from 'react'
import { Fragment } from 'react'

const Context = React.createContext('xxx')
const {Provider} = Context
export default class DataTransmit extends Component {
    render() {
        return (
            <Provider value={{"msg": "from grandfather to grandson", "code": 0}}>
                <div>
                    <SubComponent1>
                    </SubComponent1>
                </div>
            </Provider>
        )
    }
}

class SubComponent1 extends Component {
    render() {
        return (
            <SubComponent2></SubComponent2>
        )
    }
}

class SubComponent2 extends Component {
    static contextType = Context

    render() {
        const {msg, code} = this.context
        return (
            <Fragment>
                <span>{msg + "---" + code}</span>
            </Fragment>
        )
    }
}