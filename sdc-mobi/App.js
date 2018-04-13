import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView, AsyncStorage } from 'react-native';
import t from 'tcomb-form-native';
import createReactClass from 'create-react-class';

const Form = t.form.Form;

const formUser = t.struct({
  email: t.String,
  password: t.String,
  remember: t.Boolean
});

const options = {

};

const currentUser = {
  
};

export default class Home extends Component {
  render() {
    return (
      <Connexion />
      );
  }
}

const Connexion = createReactClass({

  getInitialState() {
    return { };
  },

  onChange(value) {
    this.setState({value}, function () {

      });
  },

  clearCurrentUser: function () {
    AsyncStorage.multiRemove(["email", "password", "remember"]).then(() => {
        console.log("Utilisateur supprimé.");
      });
  },

  onPress: function () {
    var value = this._form.getValue();
    if (value) {
      if(!value.remember && currentUser.email) {
        this.clearCurrentUser();
      }
      if(value.remember && currentUser.email) {
        AsyncStorage.multiMerge([["email", value.email], ["password", value.password], ["remember", value.remember]]).then(() => {
          console.log("Utilisateur mis à jour.")
          });
      }
      fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"'+ value.email +'","password":"'+ value.password +'", "auto_refresh":1}').then(function(response) {
        if(response.ok) {
          if(value.remember && !currentUser.email) {
            AsyncStorage.multiSet([["email", value.email], ["password", value.password], ["remember", value.remember]]).then(() => {
                console.log("Utilisateur créé.")
              });
          } else {
            console.log("Connexion réussie.");
          }
        } else {
          console.log('Mauvais identifiants.');
        }
      })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
    }
  },

  componentDidMount: function() {
    AsyncStorage.multiGet(["email", "password", "remember"]).then((response) => {
      this.setState({
        value: {
          email: response[0][1],
          password: response[1][1],
          remember: response[2][1]
        }
      });
      currentUser = {
        email: response[0][1],
        password: response[1][1],
        remember: response[2][1]
      };
    }).done();
  },

  render: function() {
    return (
      <ScrollView keyboardDismissMode={'interactive'} scrollsToTop={false}>
        <View style={[styles.container, styles.top]}>
          <Image style={{width: 100, height: 100, alignSelf: 'center'}} source={require('./images/logoSantiane.png')}/>
          <Text style={{alignSelf: 'center', backgroundColor: "#e28936", color: "#fff", fontSize: 33, textAlign: 'center', width: 200, fontWeight: 'bold', marginTop: 0}}>MonSantiane</Text>
            <View style={styles.connexion}>
              <Text style={{alignSelf: 'center', marginTop: 6, marginBottom: 30, fontSize: 16, fontWeight: 'bold', color: '#949494'}}>Connexion à mon espace adhérent</Text>
              <Form type={formUser} ref={c => this._form = c} options={options} onChange={this.onChange} value={this.state.value}/>
              <Button onPress={this.onPress} title="CONNEXION" color="#e28936"/>
            </View>
        </View>
      </ScrollView>
    );
  }
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'column',
    paddingBottom: 180,
  },
  top: {
    marginTop: 30,
  },
  connexion: {
    width: 270,
    height: 270,
    marginTop: 30,
  },
});


