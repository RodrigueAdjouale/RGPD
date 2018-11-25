import React from 'react';
import {Text,View} from 'react-native';
import {style} from './style';

const Entete = ({titre})=> (
  <View>
    <View style={style.haut} />
    <View style={style.entete}>
      <Text style={style.texte}>{titre}</Text>
    </View>
  </View>
);
  export default Entete;
