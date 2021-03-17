import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'; //this shows the time, wifi sign and such on your screen
import { Input, Button, Text } from 'react-native-elements';
import {auth} from '../../firebase'


const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
           headerBackTitle: 'Back to Login' 
        });
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.update({
                displayName: name,
                photoURL: imageURL || 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
            })
        } ).catch((error) => alert(error.message))
    }
    
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Text h3 style={{marginBottom: 50}}>
                Create a Signal account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Full Name' 
                    autofocus type='text' 
                    value={name} 
                    onChangeText={setName} 
                />
                <Input 
                    placeholder='Email' 
                    type='email' value={email} 
                    onChangeText={setEmail} 
                />
                <Input 
                    placeholder='Password' 
                    secureTextEntry 
                    type='password' 
                    value={password} 
                    onChangeText={setPassword} 
                />
                <Input 
                    placeholder='Profile Picture URL' 
                    type='text' 
                    value={imageUrl} 
                    onChangeText={setImageUrl} 
                    onSubmitEditing={register} 
                />
            </View>

            <Button 
                raised 
                onPress={register} 
                title='Register' 
                containerStyle={styles.button} 
            />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
})
