import products from '@/assets/data/products';
import Button from '@/src/components/Button';
import { Product } from '@/src/types/types';
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const varaints = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedVarients, setSelectedVarients] = useState("S")

  const product = products.find((p: Product) => p.id === Number(id));
  
  if (!product) return <Text>Product Not Found</Text>

  const addToCart =()=>{
    console.log("Add to Cart")
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image as string }} style={styles.image} />

      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {
          varaints.map((size) => (
            <TouchableOpacity
              onPress={() => setSelectedVarients(size)}
              key={size}
              style={[styles.size, { backgroundColor: selectedVarients === size ? "red" : "#FFFFFF" }]}>
              <Text style={[styles.sizeText,{color:selectedVarients === size ? "white":"black"}]}>{size}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <Text style={styles.price}>$ {product.price}</Text>
      <Button onPress={addToCart} text='Add to cart' />
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
    marginTop:"auto"
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  size: {
    width: 50,
    backgroundColor: "#ee99cc",
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "bold",
  }
})
