import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <div>
                <NavLink to="/home/news">新闻</NavLink>&nbsp;
                <NavLink to="/home/message">消息</NavLink>
            </div>
                
            <div>
                <Outlet/>
            </div>
        </Fragment>
    )
}

