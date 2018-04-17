import React, { Component } from 'react';
import ReactNative from 'react-native';


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

export default class FAQActivationProblems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    name: "Je ne vois pas mon contrat\n",
                    answer: "L’ensemble de vos contrats disponibles sur monsantiane.fr sont répertoriés sur l’écran d’accueil de votre espace une fois connecté, et en cliquant sur Mes contrats.\n" +
                    "\n" +
                    "Si vous ne voyez pas apparaître votre contrat, contactez-nous.\n" +
                    "\n",
                    key: "question1"
                },
                {
                    name: "Je ne vois pas mon remboursement\n",
                    answer: "Vos remboursements et prestations sont répertoriés dans la rubrique Mes prestations de votre espace.\n" +
                    "\n" +
                    "Vous avez reçu sur votre compte bancaire un remboursement et ne le voyez pas sur votre espace ? Si le problème persiste au-delà de 3 jours après la date de réception de votre remboursement, contactez-nous.\n" +
                    "\n",
                    key: "question2"
                },
                {
                    name: "Les informations renseignées sur mon espace sont inexactes (adresse postale, bénéficiaires, info banque…)\n",
                    answer: "Si vous constatez sur votre espace une erreur dans les informations renseignées à votre égard ou à l’égard des bénéficiaires de votre contrat, nous vous invitons à nous le signaler en effectuant une demande sur notre service client en ligne.\n" +
                    "\n",
                    key: "question3"
                }
            ],

        };
    }

    render() {
        return  <ScrollView>
            <View style={[styles.container, styles.top]}>
                <View style={{justifyContent: "center", height: height }}>
                    <FlatList
                        data={this.state.questions}
                        renderItem={({item}) =>
                            <View style={{marginLeft: 2}}>
                                <Text style={{color: "black", fontWeight: "bold"}}>{item.name}</Text>
                                <Text style={{color: "black"}}>{item.answer}</Text>
                            </View>}
                    />
                </View>
            </View>
        </ScrollView>
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