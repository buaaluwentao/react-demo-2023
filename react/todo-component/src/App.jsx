import React, {Component} from 'react'

import {nanoid} from 'nanoid'

import Header from './Header'
import List from './List'
import Footer from './Footer'
import css from './App.module.css'

class App extends Component {
  state = {
    todoList: [{id: nanoid(), name: 'zhangyuqi', done: false}, {id: nanoid(), name: 'jizemingmu', done: false}, {id: nanoid(), name: 'longzeluola', done: true}]
  }

  add = (item) => {
    const newItem = {id: nanoid(), name: item, done: false}
    const {todoList} = this.state
    todoList.push(newItem)
    this.setState({
      todoList
    })
  }

  onSelect = (id) => {
    const {todoList} = this.state
    for (const i in todoList) {
      if (todoList[i].id == id) {
        todoList[i].done = !todoList[i].done
      }
    }

    this.setState({
      todoList
    })
  }

  onDelete = (id) => {
    const {todoList} = this.state
    const newToList = todoList.filter((e) => {
      return e.id !== id
    })
    this.setState({todoList: newToList})
  }

  onSelectAll = (selectAll) => {
    const {todoList} = this.state
    for (const i in todoList) {
      todoList[i].done = selectAll
    }
    this.setState({
      todoList
    })
  }

  onDeleteAll = (e) => {
    const {todoList} = this.state
    const newTodoList = todoList.filter((e) => {
      return e.done != true
    })
    if (newTodoList.length == todoList.length) {
      alert("未选中")
      return
    }
    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    return (
      <div className={css.App}>
        <Header add={this.add}/>
        <List todoList={this.state.todoList} onSelect={this.onSelect} onDelete={this.onDelete}/>
        <Footer todoList={this.state.todoList} onSelectAll={this.onSelectAll} onDeleteAll={this.onDeleteAll}/>
      </div>
    )
  }
}

export default App;
