import { Stack } from "expo-router";

export default function OrderStackedComponent(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Orders" }} />
        </Stack>
    )
}