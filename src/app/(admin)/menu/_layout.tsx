import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function MenuStackedComponent() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Menu",
                    headerRight: () => (
                        <Link href="/cart" asChild>
                            <Pressable>
                                {
                                    ({ pressed }) => {
                                        return (
                                            <FontAwesome
                                                name="shopping-cart"
                                                size={25}
                                                color={Colors.light.tint}
                                                style={{ marginRight: 10, opacity: pressed ? 0.5 : 1 }}
                                            />
                                        )
                                    }
                                }
                            </Pressable>
                        </Link>
                    )
                }}

            />
        </Stack>
    )
}