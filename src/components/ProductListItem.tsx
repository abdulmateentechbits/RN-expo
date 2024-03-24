import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Product } from '../types/types';
import { Link } from 'expo-router';

const fallbackImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

type ProductListItemProps = {
  product: Product;
}


const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image
        source={{ uri: product.image || fallbackImage }}
        style={styles.productImage}
        resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
    </Pressable>
    </Link>
  )
}
export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
    shadowOffset:{width: 0, height: 0},
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  productImage: {
    width: "100%",
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
});
