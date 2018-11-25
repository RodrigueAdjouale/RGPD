import { StyleSheet } from 'react-native';
import { APP_COULEURS } from '../../styles/couleurs';

export const style = StyleSheet.create({
  buttonChangeStatus: { backgroundColor: APP_COULEURS.primaryAction },
  buttonDelete: { backgroundColor: 'red' },
  modal: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'space-around'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
