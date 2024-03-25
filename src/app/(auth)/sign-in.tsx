import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Button from '@/src/components/Button';
import { Link, Stack } from 'expo-router';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState("");

    const onSignIn = async () => {}
    const goToSignUp =  () => {}

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Sign In'}} />
            <View style={{ rowGap: 10 }}>
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Password"
                    placeholder='99.99'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                {
                    errors ? (
                        <Text style={{ color: 'red' }}>{errors}</Text>
                    ) : null
                }
                <Button text="Login" onPress={onSignIn} />
                <Link href="/sign-up" style={{ color:"blue", textAlign:'center',fontSize:21}}>Create Account</Link>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 10,
    }
})