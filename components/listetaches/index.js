import React from 'react';
import {List, ListItem } from 'react-native-elements';
import {style} from './style';


const ListeTaches = ({listeTaches}) => (
  <List>
    {listeTaches.map(commande =>
      <ListItem
        title={commande.content}
        key={commande.id}
      />
                    )
    }
  </List>
);

export default ListeTaches;
