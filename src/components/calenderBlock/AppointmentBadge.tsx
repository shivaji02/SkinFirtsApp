import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import {calendarData} from '../../data/calendarData'
import {AppointmentBadgeProps, AppointmentT} from '../../types/index';
import CustomIcon from '../../components/CustomIcon';
import { Yes,No } from '../../assets/svg/TabBarSvg';
import {scale,heightPercentageToDP,widthPercentageToDP} from '../../utils/responsiveUtils';
import { COLORS,normalizeFontSize } from '../../theme/colors';

export const AppointmentBadge : React.FC<AppointmentBadgeProps> = ({slots, onConfirm, onReject}) =>{
    return(
        <View>
            {slots.length>0 ? (
                slots.map((slot, index) => (
                    <View key={index} style={[styles.slotBox, slot.isSelected ? styles.selectedSlot : null]}>
                    <Text  style = {styles.timeText}>{slot.time}</Text>
                    <View style = {styles.details} >
                    <Text style={styles.title}>{slot.title}</Text>
                    <Text style={styles.description}>{slot.description}</Text>
                    </View>
                    <View style ={styles.actions}>
                            <CustomIcon IconComponent={Yes} size={5}  onPress={()=>onConfirm(slot.time)}/>
                            <CustomIcon IconComponent={No} size={5} onPress={()=>onReject(slot.time)} />
                    </View>
                    </View>
                ))
            ) : (
                <Text style={styles.noAppointmentText}>No Appointment in coming 4 hours</Text>
            )}

        </View>
        //hello
);
};


    const styles = StyleSheet.create({
        slotBox:{
            flexDirection:'row',
            alignItems:'center',
            padding:scale(10),

        },
        selectedSlot:{
            backgroundColor: COLORS.primary.light
        },
        timeText:{
            fontSize: normalizeFontSize(5),
        },
        details:{
            flex:1,
            marginLeft:widthPercentageToDP(5),

        },
title:{
fontSize:scale(12),
},
description:{

},
actions:{
    flexDirection:'row',
    gap:scale(10),
},
noAppointmentText:{
textAlign:'center',
marginTop:heightPercentageToDP(2)
},
    })