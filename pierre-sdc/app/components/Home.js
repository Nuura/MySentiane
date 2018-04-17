import React, { Component } from 'react';
import ReactNative from 'react-native';
import t from 'tcomb-form-native';
import user from '../actions/users'
import {StackNavigator} from "react-navigation";
import Login from './Login';
import FAQ from './FAQ'
import FAQActiveSpace from "./FAQActiveSpace";
import FAQConnectSpace from "./FAQConnectSpace";
import FAQActivationProblems from "./FAQActivationProblems";

const {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    TouchableHighlight
} = ReactNative;

class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <View style={[styles.container, styles.top]}>
            <Image style={{width: 100, height: 100, alignSelf: 'center'}} source={require('../../img/logoSantiane.png')}/>
            <Text style={{alignSelf: 'center', backgroundColor: "#e28936", color: "#fff", fontSize: 33, textAlign: 'center', width: 200, fontWeight: 'bold', marginTop: 0}}>MonSantiane</Text>
{/*
            <Text style={{alignSelf: 'center', backgroundColor: "#e28936", color: "#fff", fontSize: 33, textAlign: 'center', width: 200, fontWeight: 'bold', marginTop: 0}}></Text>
*/}

            <View style={styles.connexion}>
                <TouchableOpacity style={styles.customButton} onPress={ () => {this.props.navigation.navigate('Login')} }>
                    <Text style={{ color: 'white'}}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.customButton} onPress={ () => {this.props.navigation.navigate('FAQ')}}>
                    <Text style={{ color: 'white'}}>FAQ</Text>
                </TouchableOpacity>
               {/* <TouchableHighlight onPress={ () => {this.tryToLogin()} }>
                    <Text>Connexion</Text>
                </TouchableHighlight>*/}
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    customButton: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        backgroundColor: '#e28936' ,
        padding: 10
    }
});

export default StackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
    },
     FAQ: {
        screen: FAQ
    },
    FAQActiveSpace: {
        screen: FAQActiveSpace
    },
    FAQConnectSpace: {
        screen: FAQConnectSpace
    },
    FAQActivationProblems: {
        screen: FAQActivationProblems
    }
});