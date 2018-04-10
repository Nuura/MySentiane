import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

export const User = t.struct({
  email: t.String,
  password: t.String,
  remember: t.Boolean
});

const options = {
  fields: {
    email: {
      error: "Adresse mail incorrecte, réessayez.",
    },
    password: {
      error: "Mot de passe incorrect, réessayer.",
    },
    remember: {
      label: 'Se souvenir de moi',
    },
  },
};

function login(email, password) {
  fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"'+ email +'","password":"'+ password +'", "auto_refresh":1}').then(function(response) {
    if(response.ok) {
      console.log(response)
    } else {
      console.log('Mauvais identifiants');
    }
  })
  .catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
  });
}

export default class Connexion extends Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    if (value && (value.email != null && value.password != null)) {
      login(value.email, value.password);
      console.log(value);
    } else {
      console.log(value);
    }
  }

  render() {
    return (
      <ScrollView style={{}}>
        <View style={[styles.container, styles.top]}>
          <Image style={{width: 100, height: 100, alignSelf: 'center'}} source={require('./images/logoSantiane.png')}/>
          <Text style={{alignSelf: 'center', backgroundColor: "#e28936", color: "#fff", fontSize: 33, textAlign: 'center', width: 200, fontWeight: 'bold', marginTop: 0}}>MonSantiane</Text>
            <View style={styles.connexion}>
              <Text style={{alignSelf: 'center', marginTop: 6, marginBottom: 30, fontSize: 16, fontWeight: 'bold', color: '#949494'}}>Connexion à mon espace adhérent</Text>
              <Form type={User} ref={c => this._form = c} options={options}/>
              <Button onPress={this.handleSubmit} title="CONNEXION" color="blue"/>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'column',
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


