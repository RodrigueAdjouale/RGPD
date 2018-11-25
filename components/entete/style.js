import {StyleSheet} from 'react-native';
import {APP_COULEURS} from '../../styles/couleurs';


export const style = StyleSheet.create({
  haut: {
    backgroundColor: APP_COULEURS.darkPrimary,
    height: 30
  },
  entete: {
    backgroundColor: APP_COULEURS.primary,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: APP_COULEURS.shadow,
    shadowOpacity: 0.2,
    shadowOffset: { height: 10 }
  },
  texte: {
    color: APP_COULEURS.primaryText,
    fontSize: 30
  }
});
