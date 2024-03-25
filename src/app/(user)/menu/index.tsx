import { FlatList, View } from 'react-native';
import products, { shirts } from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';



export default function MenuScreen() {
  return (
    <View>
     <FlatList
       data={products}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({ item }) => <ProductListItem product={item} />}
       numColumns={2}
       contentContainerStyle={{gap:10, padding:10}}
       columnWrapperStyle={{gap:10}}
       showsVerticalScrollIndicator={false}
     />
    </View>
  );
}