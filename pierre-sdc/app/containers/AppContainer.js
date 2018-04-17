import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Login from '../components/Login'
import Home from '../components/Home'

class MonSantiane extends Component {
    render() {
        return <Home {...this.props}/>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default (Home);//connect((state) => { return {} }, mapDispatchToProps)(MonSantiane);