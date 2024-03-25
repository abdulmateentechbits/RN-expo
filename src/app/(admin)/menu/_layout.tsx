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
                        <Link href="/(admin)/create" asChild>
                            <Pressable>
                                {
                                    ({ pressed }) => {
                                        return (
                                            <FontAwesome
                                                name="plus-square-o"
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
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Menu",
                    headerRight: () => (
                        <Link href="/" asChild>
                            <Pressable>
                                {
                                    ({ pressed }) => {
                                        return (
                                            <FontAwesome
                                                name="pencil"
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