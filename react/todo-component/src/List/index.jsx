import React, {Component} from 'react'
import RactDOM from 'react-dom'

import uuid from 'nanoid'

import Item from '../Item'
import css from './index.module.css'

class List extends Component {
	render() {
		const {todoList, onSelect, onDelete} = this.props
		return (
			<div className={css.List}>
				{todoList.map((c) => <Item key={c.id} id={c.id} todo={c} onSelect={onSelect} onDelete={onDelete}/>)}
			</div>
		)
	}
}

export default List