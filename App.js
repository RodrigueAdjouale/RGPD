import React from 'react';
import {Text,View} from 'react-native';
import Entete from './components/entete';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Entete titre="Mes commandes" />
      </View>
    );
  }
}
