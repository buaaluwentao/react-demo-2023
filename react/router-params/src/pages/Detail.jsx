import React from 'react'
import { Fragment } from 'react'
// import { useParams } from 'react-router'
// import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router'

export default function Detail() {
    // 方法1：params
    // const {title, name} = useParams()
    // 方法2：search
    // const [params, setParams] = useSearchParams()
    // 方法3 state
    const {name, title}= useLocation().state
    return (
        <Fragment>
            {/* <div>标题：{title}</div>
            <div>名字：{name}</div> */}
            {/* <div>标题：{params.get("title")}</div>
            <div>名字：{params.get("name")}</div> */}
            <div>标题：{name}</div>
            <div>名字：{title}</div>
        </Fragment>
        
    )
}
