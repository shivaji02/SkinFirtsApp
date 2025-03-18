import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions,Text, Keyboard, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');
import { GiftedChat , IMessage } from 'react-native-gifted-chat';
import { KeyboardProvider } from 'react-native-screens';
const ChatBot = () => {
    console.log('ChatBot.tsx rendered');
    const [message,setMessages] = useState<IMessage[]>([]);

    return (

        <SafeAreaView style={styles.container}>
            <Text>  Chat2Save</Text>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    // chatIcon: {

    //     },

    // NoIcon: {

    // }
});

export default ChatBot;

