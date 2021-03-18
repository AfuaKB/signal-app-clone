import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar rounded source={{uri:'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}} />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '800'}}>Afribbean Tech Collective Chat</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    Official ATC virtual playground and bonding zone -  work banter, memes, juicy team gossip and opening of keys,
                    planning of team activities, team trips and hunting for bombers. 
                    
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
