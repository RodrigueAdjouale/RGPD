import React from 'react';
import {Text,View} from 'react-native';
import {Button} from 'react-native-elements';
import Entete from './components/entete';
import ListeTaches from './components/listetaches';

const commandes =[
{
  id: 0,
  content: 'Commande 22  itep Saint François',
  date: '22/11/2018',
  status: 'Commande effectuée'
},
{
  id: 1,
  content: 'Commande 23  itep Saint François',
  date: '22/11/2018',
  status: 'Commande effectuée'
},
{
  id: 2,
  content: 'Commande 24  itep Saint François',
  date: '01/11/2018',
  status: 'Commande effectuée'
},
{
  id: 3,
  content: 'Commande 25  ime Orangeraie',
  date: '18/11/2018',
  status: 'Commande Livrée siège'
},
{
  id: 4,
  content: 'Commande 26  itep Naridel',
  date: '10/11/2018',
  status: 'Commande livrée sur site'
}
]



export default class App extends React.Component {

  constructor(props){
      super(props);
          this.state ={ListeTaches:commandes};
          }

  render() {
    return (
      <View>
        <Entete titre="Mes commandes" />
      <ListeTaches listeTaches={this.state.ListeTaches}/>
      </View>
    );
  }
}
