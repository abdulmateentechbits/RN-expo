import { Stack } from "expo-router";

export default function OrderStackedComponent(){
    return (
        <Stack>
            <Stack.Screen name="two" options={{ title: "Orders" }} />
        </Stack>
    )
}