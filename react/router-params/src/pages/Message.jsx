import React from 'react'
import { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'

export default function Message() {
    const navigate = useNavigate()
    const messages = [{
        id: '001',
        name: '消息1',
        title: '标题1'
    }, {
        id: '002',
        name: '消息2',
        title: '标题2'
    }, {
        id: '003',
        name: '消息3',
        title: '标题3'
    }]
    return (
        <Fragment>
            <ul>
            {/* {messages.map((m) => <li key={m.id}><NavLink to={`/home/message/detail/${m.title}/${m.name}`}>{m.title+'--'+m.name}</NavLink></li>)} */}
            {/* {messages.map((m) => <li key={m.id}><NavLink to={`/home/message/detail?title=${m.title}&name=${m.name}`}>{m.title+'--'+m.name}</NavLink></li>)} */}
            {messages.map((m) => <li key={m.id}><NavLink to="/home/message/detail" state={{
                name: m.name,
                title: m.title
            }}>{m.title+'--'+m.name}</NavLink><button onClick={() => navigate(-1)}>返回</button></li>)}
            </ul>
            <Outlet/>
        </Fragment>
    )
}
