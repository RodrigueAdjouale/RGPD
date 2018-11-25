import React from 'react';
import {List, ListItem } from 'react-native-elements';
import {style} from './style';


const ListeTaches = ({listeTaches}) => (
  <List>
<ListItem
title={listeTaches[0].content}
/>
<ListItem
title={listeTaches[1].content}
/>
<ListItem
title={listeTaches[2].content}
/>
<ListItem
title={listeTaches[3].content}
/>


</List>

);

export default ListeTaches;
