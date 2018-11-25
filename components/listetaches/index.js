import React from 'react';
import {Text,View} from 'react-native';
import {List, ListItem } from 'react-native-elements';
import {style} from './style';


const ListeTaches = ({listeTaches}) => (
  <List>
    {listeTaches.map(commande =>(
      <ListItem
        title={commande.content}
        key={commande.id}
        subtitle={
                  <View>
                      <Text style={style.bleu}>{commande.date}</Text>
                    <Text style={style.rouge}>{commande.status}</Text>
                  </View>
                  }


      />
                                )
                    )
    }
  </List>
);

export default ListeTaches;
