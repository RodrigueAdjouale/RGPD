import React from 'react';
import {Text} from 'react-native';
import Entete from './components/entete';

export default class App extends React.Component {
  render() {
    return (
        <Entete titre="Mes commandes" />
    );
  }
}
