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


export default class FAQActiveSpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    name: "Consultation de mes informations\n",
                    answer: "Rendez-vous sur la page www.monsantiane.fr/activation\n" +
                    "Suivez la procédure indiquée : renseignez votre numéro d’adhérent, le code d'activation et votre nom que nous vous avons envoyés par email (intitulé « Espace Adhérent Santiane : votre accès »)\n" +
                    "Renseignez votre votre code postal tel que vous nous l'avez indiqué dans le cadre de votre contrat.\n" +
                    "Cliquez sur « Activer mon espace.»\n" +
                    "Nous vous demanderons ensuite de renseigner une adresse email valide qui vous servira d’identifiant, et un mot de passe de votre choix pour vos futures connexions.\n" +
                    "\n",
                    key: "question1"
                },
                {
                    name: "J’ai perdu mes identifiants d’activation\n",
                    answer: "Les identifiants nécessaires pour activer votre espace vous ont été envoyés par email. Cet email a pour objet « Espace Adhérent Santiane : votre accès ». Nous vous invitons donc dans un premier temps à effectuer une recherche dans votre boîte mail pour tenter de retrouver cet email. Vérifiez également dans vos courriers indésirables.\n" + "\n" + "Si vous ne le retrouvez pas, contactez-nous.\n" + "\n",
                    key: "question2"
                },
                {
                    name: "Je rencontre des problèmes d’activation\n",
                    answer: "Assurez-vous d’avoir bien renseigné les bons identifiants :\n" +
                    "\n" +
                    "Votre numéro d’adhérent, le code d'activation et votre nom tels qu’ils vous ont été transmis dans un email intitulé « Espace Adhérent Santiane : votre accès ». Assurez-vous d’avoir bien recopié ces identifiants en tenant compte des éventuelles majuscules.\n" +
                    "Votre code postal tels que vous nous l'avez communiqué dans le cadre de votre contrat.\n" +
                    "Si le problème persiste, contactez-nous.\n" +
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