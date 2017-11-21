import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action/action'

class CounterMin extends Component {
    render() {
        console.log(this.props, '师傅')
        const { minAction } = this.props
        return (
            <div>
                <button onClick={minAction}>Min</button>
            </div>
        )
    }
}


export default CounterMin
