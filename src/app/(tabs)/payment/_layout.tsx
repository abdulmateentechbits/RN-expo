import { Stack } from "expo-router";

export default function PaymentStackedComponent() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Payment' }} />
        </Stack>
    )
}