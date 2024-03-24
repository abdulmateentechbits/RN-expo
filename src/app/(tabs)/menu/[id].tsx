import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("🚀 ~ ProductDetailScreen ~ id:", id);

  return (
    <View>
      <Stack.Screen options={{ title: 'Details '+ id }} />
      <Text>Single Product Detail Screen</Text>
    </View>
  )
}

export default ProductDetailScreen
