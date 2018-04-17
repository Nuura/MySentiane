import React, { Component } from 'react';
import ReactNative from "react-native";


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

export default class FAQConnectSpace extends Component {

    constructor(props) {
        super(props);this.state = {
            questions: [
                {
                    name: "Comment me connecter à mon espace ?\n",
                    answer: "1ère connexion : une fois votre espace activé, nous vous demanderons de renseigner une adresse email et un mot de passe de votre choix qui vous serviront d’identifiants de connexion.\n" +
                    "\n" +
                    "La prochaine fois, rendez-vous directement sur la page www.monsantiane.fr/connexion, renseignez l’adresse email et le mot de passe que vous avez définis et cliquez sur « Connexion ». Simple, non ?\n" +
                    "\n",
                    key: "question1"
                },
                {
                    name: "J’ai perdu mes identifiants de connexion\n",
                    answer: "Vous avez perdu votre mot de passe : il vous suffit de le réinitialiser, depuis la page de connexion en cliquant sur J’ai oublié mon mot de passe. Un lien vous sera envoyé par email pour réinitialiser votre mot de passe.\n" +
                    "Vous avez perdu votre adresse email : vous ne savez plus quelle adresse email vous aviez renseignée pour vous connecter à votre espace ? Contactez-nous.\n",
                    key: "question2"
                },
                {
                    name: "Je rencontre des problèmes de connexion\n",
                    answer: "Assurez-vous d’avoir bien renseigné les bons identifiants :\n" +
                    "\n" +
                    "Votre adresse email : il s’agit de l’adresse email que vous avez renseigné lors de votre 1ère connexion.\n" +
                    "Votre mot de passe : il s’agit d’un mot de passe que vous avez choisi lors de votre 1ère connexion. Assurez-vous d’avoir bien tenu compte des éventuelles majuscules quand vous avez tapé votre mot de passe.\n" +
                    "Essayez avec un nouveau mot de passe : pour cela, cliquez sur J'ai oublié mon mot de passe. Un lien vous sera envoyé par email pour le réinitialiser. Tentez ensuite de vous connecter avec ce nouveau mot de passe.\n" +
                    "Si le problème persiste, contactez-nous.\n" +
                    "\n",
                    key: "question3"
                },
                {
                    name: "Je souhaite changer d’adresse email et/ou de mot de passe\n",
                    answer: "Rien de plus simple : rendez-vous sur votre espace dans la rubrique Mon compte. Vous pourrez ici modifier votre adresse email et votre mot de passe.\n" +
                    "\n",
                    key: "question4"
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