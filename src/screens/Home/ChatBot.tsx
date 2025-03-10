import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import { ChatBotIcon, no } from '../../assets/svg/actions/index';
import { COLORS } from '../../theme/colors';
import { scale, widthPercentageToDP, heightPercentageToDP } from '../../utils/responsiveUtils';
const { width, height } = Dimensions.get('window');

const ChatBot = () => {
    const [isChatBot, setIsChatBot] = useState(true);
    const navigation = useNavigation();
    const handleChat = (): void => {
        navigation.navigate('ChatBot');
        setIsChatBot(!isChatBot);
        console.log('ChatBot Pressed');
    };

    const handleNo = (): void => {
        setIsChatBot(isChatBot);
        console.log('No Pressed');
        navigation.goBack();
    };
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     });
    // }
    //);

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        }),
    ).current;

    return (
        <Animated.View
            style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
            {...panResponder.panHandlers}>
            {/* <TouchableWithoutFeedback > */}
                <View style={isChatBot ? styles.chatIcon : styles.NoIcon}>
                    {isChatBot ? (
                        <CustomIcon IconComponent={ChatBotIcon} size={40} onPress={handleChat} />
                    ) : (
                        <CustomIcon IconComponent={no} size={40} onPress={() => {handleNo}} />
                    )}
                </View>
            {/* </TouchableWithoutFeedback> */}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    chatIcon: {
        //  bottom: -280,
        //left: scale(140),
        backgroundColor: COLORS.primary[300],
        borderRadius: 50,
        width: widthPercentageToDP(7),
        height: heightPercentageToDP(7),
        justifyContent: 'center',
        alignItems: 'center',
         position: 'relative',
        },
    NoIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary[300],
        borderRadius: 50,
        width: widthPercentageToDP(7),
        height: heightPercentageToDP(7),
    }
});

export default ChatBot;

