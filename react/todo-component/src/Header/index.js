import React, {Component} from 'react'
import RactDOM from 'react-dom'

import css from './index.module.css'

class Header extends Component {
	onKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.props.add(e.target.value)
		}
	}

	render() {
		return (
			<div>
				<input className={css.Header} placeholder="请输入你的任务名称，按回车键确认。" onKeyDown={this.onKeyDown}></input>
			</div>
		)
	}
}

export default Header