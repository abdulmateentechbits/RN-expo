import { Stack } from "expo-router";

export default function ProfileScreenStackedComponent(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"Profile"}} />
        </Stack>
    )
}