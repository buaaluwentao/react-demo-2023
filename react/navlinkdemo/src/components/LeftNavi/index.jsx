import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomeContent from '../../pages/HomeContent'
import AboutContent from '../../pages/AboutContent'
import '../../pages/MyNavLink/index.css'
import MyNavLink from '../../pages/MyNavLink'

export default class LeftNavi extends Component {
  render() {
    return (
      <div style={{width:'200px'}}>
        <MyNavLink to="/home">home</MyNavLink>
        <MyNavLink to="/about">about</MyNavLink>
      </div>
    )
  }
}
