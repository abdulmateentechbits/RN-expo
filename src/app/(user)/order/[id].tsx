import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function OrderDetailsScreen() {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);

  return (
    <View style={{ padding: 10, gap: 20, flex: 1 }}>
      <Stack.Screen options={{ title: `Order #${id}` }} />
      
     
    </View>
  );
}