import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action/action'
import './App.css';
import './app.less';
import Add from './component/add'
import Min from './component/min'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange (e) {
        this.setState({
            value: e.target.value ? e.target.value : ''
        })
    }

     render() {
        console.log(this.props)
        const { count, name, increaseAction, incrementAsync, minAction } = this.props
        return (
          <div className="App">
            <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            {this.state.value}
            <div>
                <Add name = {name}  count = {count} increaseAction = {increaseAction} incrementAsync = {incrementAsync}/>
                <Min minAction = {minAction} count = {name} />
            </div>
          </div>
        );
     }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
