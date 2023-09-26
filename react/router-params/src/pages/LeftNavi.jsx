import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Fragment } from 'react'

export default class LeftNavi extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to='/home'>Home</NavLink>
                </li>
            </ul>
        )
    }
}