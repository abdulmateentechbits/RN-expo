import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';

import CartListItem from '../components/CartListItem';
import Button from '../components/Button';
import { useCart } from '../Provider/CartProvider';

export default function CartScreen() {
  const {items,total} = useCart();

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FlatList contentContainerStyle={{gap:10,padding:10}} data={items} renderItem={({item})=><CartListItem cartItem={item} />} />
      <Text style={{fontWeight:'bold', paddingHorizontal:12}}>Total: ${total}</Text>
      <Button text='Checkout' />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
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
