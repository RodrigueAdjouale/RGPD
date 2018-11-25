import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';

const MenuCommande = ({
  isVisible
}) => (

    <Modal
      isVisible={isVisible}
      animationIn={'zoomInDown'}
      animationOut={'zoomOutUp'}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransiitonInTiming={1000}
      backdropTransiitonOutTiming={1000}
    >

        <View style={style.modal}>
          <View style={style.textView}>
            <Text>Que souhaitez vous faire</Text>
          <Text>pour cette commande ?</Text>
          </View>
          <View style={style.buttonView}>
            <Button
              buttonStyle={style.buttonDelete}
              title="Supprimer"
              onPress={() => console.log("supprimer")}
            />
            <Button
              buttonStyle={style.buttonChangeStatus}
              title="Modifier statut"
              onPress={() => console.log("statut")}
            />
          </View>
        </View>

    </Modal>

);

export default MenuCommande;
