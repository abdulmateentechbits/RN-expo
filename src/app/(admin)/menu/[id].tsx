import products, { shirts } from '@/assets/data/products';
import { useCart } from '@/src/Provider/CardProvider';
import Button from '@/src/components/Button';
import { PizzaSize, Product } from '@/src/types/types';
import { useRouter } from 'expo-router';
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const varaints: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedVarients, setSelectedVarients] = useState<PizzaSize>("S");
  
  const router = useRouter();

  const {addItem} = useCart();

  const product = products.find((p: Product) => p.id === Number(id));
  
  if (!product) return <Text>Product Not Found</Text>

  const addToCart =()=>{
    if(!product) return;
    addItem(product, selectedVarients);
    router.push("/cart");
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image as string }} style={styles.image} />

      
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain"
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
})
