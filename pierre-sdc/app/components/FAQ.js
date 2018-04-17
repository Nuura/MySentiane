import React, { Component } from 'react';
import ReactNative from 'react-native';
import t from 'tcomb-form-native';
import user from '../actions/users'
import {StackNavigator} from "react-navigation";
import Login from './Login';
import FAQActiveSpace from './FAQActiveSpace'
import FAQConnectSpace from './FAQConnectSpace'
import FAQActivationProblems from './FAQActivationProblems'

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
    FlatList,
    TouchableHighlight,
    Dimensions
} = ReactNative;

const height = Dimensions.get('window').height;

export default class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            button: [{
                name: "Activation de mon espace",
                action: "FAQActiveSpace",
                key: "button1"
            },
                {
                    name: "Connexion à mon espace",
                    action: "FAQConnectSpace",
                    key: "button2"
                },
                {
                    name: "Consultation de mes informations",
                    action: "FAQActivationProblems",
                    key: "button3"
                }
            ],

        };
    }

    render() {
        return (
            <ScrollView>
                <View style={[styles.container, styles.top]}>
                    <View style={{alignItem: "center", justifyContent: "center", height: height }}>
                        <FlatList
                            data={this.state.button}
                            renderItem={({item}) =>
                                <TouchableOpacity style={styles.customButton} onPress={ () => {this.props.navigation.navigate(item.action)} }>
                                     <Text style={{ color: 'white' }}>{item.name}</Text>
                                </TouchableOpacity>}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 50
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