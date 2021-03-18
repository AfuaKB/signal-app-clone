import React, { useLayoutEffect } from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context'
//import { ScrollView } from 'react-native-gesture-handler'
import CustomListItem from '../CustomListItem'
import { Avatar } from 'react-native-elements'
import {auth, db} from '../../firebase'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {

    const [chats, setChats] = useState([])

    const SignOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        return unsubscribe;
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
           title: 'Signal',
           headerStyle: {backgroundColor: '#fff'},
           headerTitleStyle: {color: 'black'},
           headerTintColor: 'black',
           headerLeft: () => (
               <View style={{marginLeft: 20}}>
                   <TouchableOpacity onPress={SignOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{ uri: auth.currentUser.photoURL }} /> 
                        {/* we are trying to get the profile picture of the current user logged in*/}
                   </TouchableOpacity>
               </View>
           ),
           headerRight: () => (
               <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 80,
                    marginRight: 20,
                }}>
                   <TouchableOpacity activeOpacity={0.5} >
                        <AntDesign name='camerao' size={24} color='black'/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => navigation.navigate('AddChat')}>
                       <SimpleLineIcons name='pencil' size={24} color='black' />
                   </TouchableOpacity>
               </View>
           ),
            
        });
    }, [navigation]) 

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
