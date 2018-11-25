import React from 'react';
import {Text,View} from 'react-native';
import {List, ListItem,Badge } from 'react-native-elements';
import {style} from './style';


const ListeTaches = ({listeTaches,appelParent}) => (
  <List containerStyle={style.list}>
    {listeTaches.map(commande =>(
      <ListItem
        title={commande.content}
        onPress={() => appelParent(commande.content)}

        key={commande.id}
        subtitle={
                  <View>
                      <Text style={style.bleu}>{commande.date}</Text>

                  </View>
                  }
        badge={{
          element:<Badge value={commande.status}
            containerStyle={
              commande.status==="Demande"?
              {backgroundColor:"#c0392b"}:
              commande.status==="Effectuée"?
              {backgroundColor:"#e67e22"}:
              commande.status==="Installation"?
              {backgroundColor:"#3498db"}:
                commande.status==="Recupérée"?
                {backgroundColor:"#2ecc71"}:
                {backgroundColor:"#bdc3c7"}
                          }
                />
        }}


      />
                                )
                    )
    }
  </List>
);

export default ListeTaches;
