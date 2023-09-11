import React, {Component} from 'react'
import RactDOM from 'react-dom'

import css from './index.module.css'

class Footer extends Component {
	
	onClick = (e) => {
		const {onSelectAll} = this.props
		// console.log(onSelectAll)
		onSelectAll(e.target.checked)
	}

	deleteAll = (e) => {
		this.props.onDeleteAll()
	}

	render() {
		const {todoList} = this.props
		const done = todoList.reduce((preV, cur) => {
			if (cur.done) {
				return preV + 1
			}
			return preV
		}, 0)
		return (
			<div className={css.container + " "+ css.clearfix}>
				<input type="checkbox" checked={done == todoList.length} onChange={this.onClick}/>
				<span>已完成{done}/全部{todoList.length}</span>
				<button className={css.fix} onClick={this.deleteAll}>删除选中</button>
			</div>
		)
	}
}

export default Footer