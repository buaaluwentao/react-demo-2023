import React, { Component } from 'react'
import LeftNavi from '../../pages/LeftNavi'
import Right from './Right'

export default class Content extends Component {
    render() {
        return (
            <div className="content clear-fix">
                <div className="left fix">
                    <LeftNavi/>
                </div>
                <div className="right fix">
                    <Right/>
                </div>
            </div>
        )
    }
}
