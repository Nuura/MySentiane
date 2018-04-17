import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import user from '../actions/users'

const { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Alert,
    Image, 
    ScrollView,
    TouchableHighlight 
} = ReactNative;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { emailInput: '', passwordInput: '' }
    }

    tryToLogin() {
        this.props.fetchUsers(this.state.emailInput, this.passwordInput)
    }

    render() {
            return <View style={[styles.container, styles.top]}>
                <Image style={{width: 100, height: 100, alignSelf: 'center'}} source={require('../../img/logoSantiane.png')}/>
                <Text style={{alignSelf: 'center', backgroundColor: "#e28936", color: "#fff", fontSize: 33, textAlign: 'center', width: 200, fontWeight: 'bold', marginTop: 0}}>MonSantiane</Text>
                <View style={styles.connexion}>
                    <Text style={{alignSelf: 'center', marginTop: 6, marginBottom: 30, fontSize: 16, fontWeight: 'bold', color: '#949494'}}>Connexion à mon espace adhérent</Text>
                    <TextInput
                        returnKeyType="email"
                        placeholder="Email"
                        onChangeText={(emailInput) => this.setState({emailInput})}
                        value={this.state.emailInput}
                    />
                    <TextInput
                        returnKeyType="password"
                        placeholder="Password"
                        onChangeText={(passwordInput) => this.setState({passwordInput})}
                        value={this.state.passwordInput}
                    />
                    <TouchableHighlight onPress={ () => {this.tryToLogin()} }>
                        <Text>Connexion</Text>
                    </TouchableHighlight>
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
  });

function mapStateToProps(state) {
    return {
        searchedUsers: state.searchedUsers
    }
}

export default connect(mapStateToProps)(Login)