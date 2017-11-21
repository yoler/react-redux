import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action/action'

class CounterIncrease extends Component {
    render() {
        console.log(this.props)
        const { count, name, increaseAction, incrementAsync } = this.props
        return (
            <div>
                <span className="test">{count}{name}</span>
                <button onClick={increaseAction}>Increase</button>
                <button onClick={incrementAsync}>Increase after 1s</button>
            </div>
        )
    }
}


export default CounterIncrease
