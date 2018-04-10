import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView } from 'react-native';
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

function login(email, password) {
  
}

export default class Home extends Component {
  render() {
    return (
      <Connexion />
      );
  }
}

const Connexion = createReactClass({

  getInitialState() {
    return { value: null };
  },

  onChange(value) {
    this.setState({value}, function () {
        
      });
  },

  onPress: function () {
    var value = this._form.getValue();
    if (value) {
      console.log(value.email + '' + value.password);
      fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"'+ value.email +'","password":"'+ value.password +'", "auto_refresh":1}').then(function(response) {
        if(response.ok) {
          console.log(response);
        } else {
          console.log('Mauvais identifiants');
        }
      })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
      console.log(value);
    }
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
              <Button onPress={this.onPress} title="CONNEXION" color="blue"/>
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


