import React, { Component } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default class News extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    <li><NavLink to="">消息1</NavLink></li>
                    <li><NavLink to="">消息2</NavLink></li>
                    <li><NavLink to="">消息3</NavLink></li>
                </ul>
            </Fragment>
        )
    }
}
