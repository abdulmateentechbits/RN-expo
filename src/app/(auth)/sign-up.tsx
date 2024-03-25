import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Button from '@/src/components/Button';
import { Link } from 'expo-router';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState("");

    const onSignUp = async () => {}
    const goToSignIn =  () => {}

    return (
        <View style={styles.container}>
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
                <Button text="Create Account" onPress={onSignUp} />
                <Link href="/sign-in" style={{ color:"blue", textAlign:'center',fontSize:21}}>Login</Link>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 10,
    }
})