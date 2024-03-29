import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrderListItems';

export default function OrdersScreen() {
  return (
   <View style={{margin:5}}>
     <FlatList
      data={orders}
      renderItem={({item})=>(<OrderListItem order={item} />)}
      
    />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
