import React from 'react';
import {Text,View,ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Entete from './components/entete';
import ListeTaches from './components/listetaches';
import BoutonMenu from './components/menu';
import MenuCommande from './components/menu-commandes';

const commandes =[
{
  id: 0,
  content: 'Commande 22  itep Saint François',
  date: '22/11/2018',
  status: 'Demande'
},
{
  id: 1,
  content: 'Commande 23  itep Saint François',
  date: '22/11/2018',
  status: 'Effectuée'
},
{
  id: 2,
  content: 'Commande 24  itep Saint François',
  date: '01/11/2018',
  status: 'Effectuée'
},
{
  id: 3,
  content: 'Commande 25  ime Orangeraie',
  date: '18/11/2018',
  status: 'Installation'
},

{
  id: 4,
  content: 'Commande 26  itep Naridel',
  date: '10/11/2018',
  status: 'Recupérée'
}
]



export default class App extends React.Component {

  constructor(props){
      super(props);
          this.state ={
            ListeTaches:commandes,
            isMenuCommandeVisible:false
          };
          }

    ouvrirMenu =(nomCommande)=>{
      console.log("Appui onPress :",nomCommande);
    }
    modificationVisibiliteMenuCommandes=()=>{
      this.setState({isMenuCommandeVisible:!this.state.isMenuCommandeVisible});

    }
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView>
        <Entete titre="Mes commandes" />
      <ListeTaches
        pressCommande={this.modificationVisibiliteMenuCommandes}
        listeTaches={this.state.ListeTaches}
      />

      </ScrollView>
        <MenuCommande isVisible={this.state.isMenuCommandeVisible} disparitionFenetre ={this.modificationVisibiliteMenuCommandes}/>
        <BoutonMenu />
      </View>

    );
  }
}
