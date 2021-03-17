import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import {Button, Input, Image} from "react-native-elements";
import { StatusBar } from 'expo-status-bar'; //this shows the time, wifi sign and such on your screen
import {auth} from '../../firebase'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log('User is here')
                navigation.replace('Home')
            }
        })
        return unsubscribe;
    }, []);

    const signIn = () => {}

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image source={{uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"}}
            style={{width: 200, height: 200}} />
            <View style={styles.InputContainer}>
                <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)} /> 
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text => setPassword(text))} />
            </View>

            <Button containerStyle={styles.button} title='Login' onPress={signIn}  />
            <Button containerStyle={styles.button} type='outline' title='Register' onPress = {() => navigation.navigate('Register')}  />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor: 'white',

    },
    InputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10,
    },

})
