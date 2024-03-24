import { Stack } from "expo-router";

export default function MenuStackedComponent() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Menu" }} />
        </Stack>
    )
}