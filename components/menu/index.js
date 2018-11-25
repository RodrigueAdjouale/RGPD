import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


const BoutonMenu = () => (


  <ActionButton  buttonColor={"#34495e"}>
    <Icon color={"#ecf0f1"}  />


      <ActionButton.Item buttonColor='#9b59b6' title="Quitter" onPress={ ()=> this.props.navigation.navigate('SignIn')}>
        <Icon name="md-power" style={styles.actionButtonIcon} />

      </ActionButton.Item>
      <ActionButton.Item buttonColor='#3498db' title="Nouveau" onPress={ ()=> this.props.navigation.navigate('SignIn')}>
        <Icon name="md-create" style={styles.actionButtonIcon} />

      </ActionButton.Item>
      <ActionButton.Item buttonColor='#1abc9c' title="Commandes" onPress={ ()=> this.props.navigation.navigate('SignIn')}>
        <Icon name="md-filing" style={styles.actionButtonIcon} />

      </ActionButton.Item>



  </ActionButton>
  );

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });

export default BoutonMenu;
