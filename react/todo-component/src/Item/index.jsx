import React, {Component} from 'react'
import RactDOM from 'react-dom'
import PropTypes from 'prop-types'

import css from './index.module.css'


class Item extends Component {
	static propTypes = {
		'name': PropTypes.string.isRequired
	}

	static defaultProps = {
		'name': "xiaoming"
	}

	btnRef = React.createRef()

	onFocus = (focus) => {
		return (e) => {
			this.btnRef.current.style.display = focus ? 'inline' : 'none'
			e.target.style.background = focus ? '#ccc' : 'white'
		}
	}

	onChange = (e) => {
		const {id, onSelect} = this.props
		onSelect(id)
	}

	onDelete = (e) => {
		const {id, onDelete} = this.props
		onDelete(id)
	}

	render() {
		const {todo} = this.props
		return (
			<div className={css.Item + " " + css.clearfix} onMouseEnter={this.onFocus(true)} onMouseLeave={this.onFocus(false)}>
				<input type="checkbox" checked={todo.done} onChange={this.onChange}/>
				<span>{todo.name}</span>
				<div className={css.delete + " " + css.fix}>
					<button ref={this.btnRef} onClick={this.onDelete}>删除</button>
				</div>
			</div>
		)
	}
}

export default Item