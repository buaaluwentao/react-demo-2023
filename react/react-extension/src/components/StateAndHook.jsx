import React, {ReactDOM} from 'react'
import { Fragment } from 'react'

export default function FunctionStateAndRef() {
    const [counter, setCounter] = React.useState(0)
    const ref = React.createRef()

    function add() {
        console.log(ref.current.value)
        setCounter(counter + 1)
    }

    return (
        <Fragment>
            <span>{counter}</span>&nbsp;<button onClick={add}>点击+1</button>
            <input ref={ref} placeholder="xxxx"/>
        </Fragment>
    )
}

export function FunnctionHook() {
    const [counter, setCounter] = React.useState(0)
    const [name, setName] = React.useState("name")

    // 挂载和更新都会调用
   /*React.useEffect(function(){
        console.log("mount or update")
        function willUpdateCallback(){
            alert("willUpdate ...")
        }
        return willUpdateCallback
    })*/

    // 挂载时才会调用
    /*React.useEffect(function(){
        console.log("didMount")
        function willUnmountCallBack(){
            alert("willUnmountCallBack ..")
        }
        return willUnmountCallBack
    }, [])*/

    // 只关联某个属性的更新
    /*React.useEffect(function(){
        console.log("didMount or willUpdate")
        function didUpdateOrWillUnmountCallBack(){
            alert("didUpdateOrWillUnmountCallBack ..")
        }
        return didUpdateOrWillUnmountCallBack
    }, [counter])*/

    React.useEffect(function(){
        console.log("xxx")
        const timer = setTimeout(() => {
            add()
        }, 1000);
        return function(){
            clearTimeout(timer)
        }
    }, [counter])

    function add() {
        setCounter(counter + 1)
    }

    function changeName() {
        setName("aha")
    }

    return (
        <Fragment>
            <button onClick={add}>点击+1</button>&nbsp;
            <span>当前值：{counter}</span>&nbsp;
            <button onClick={changeName}>切换名字</button>&nbsp;
            <span>当前名字：{name}</span>
        </Fragment>
    )
}
