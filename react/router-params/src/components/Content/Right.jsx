import React, { Component } from 'react'
import { Fragment } from 'react'
import { useRoutes } from 'react-router'
import routes from '../../pages/routes'
import { Routes } from 'react-router'

export default function Right() {
    const elements = useRoutes(routes)
    return (
        <div>
            {/* 方法1 */}
            {/* <Routes>
                <Route path='/home' element={<Home/>}>home区域</Route>
                <Route path='/about' element={<About/>}>about区域</Route>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
            </Routes> */}
            {/* 方法2 */}
            {elements}
        </div>
    )
}

