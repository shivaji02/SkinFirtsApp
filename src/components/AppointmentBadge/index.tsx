// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {AppointmentT} from '../../types/index';
// // import { CalendarHeaderProps } from 'react-native-calendars/src/calendar/header';
// import { scale, verticalScale, moderateScale } from '../../utils/responsiveUtils'; // For responsiveness
// import { COLORS } from '../../theme/colors';

// const AppointmentBadge: React.FC<{ data: { appointments: AppointmentT[] } }> = ({ data }) => {
//     return (
//         <View>
//             {data.appointments.map((appointment, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     style={[
//                         styles.appointmentBox,
//                         appointment.isSelected ? styles.selectedAppointment : null,
//                     ]} 
//                 >
//                     <Text style={styles.timeText}>{appointment.time}</Text>
//                     <View style={styles.details}>
//                         <Text style={styles.title}>{appointment.title}</Text>
//                         <Text style={styles.description}>{appointment.description}</Text>
//                     </View>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     appointmentBox: {
//         flexDirection: 'row',
//         padding: moderateScale(10),
//         borderRadius: moderateScale(12),
//         marginBottom: verticalScale(20),
//     },
//     selectedAppointment: {
//         backgroundColor: '#e0ebff',
//     },
//     timeText: {
//         fontSize: moderateScale(16),
//         fontWeight: 'bold',
//     },
//     details: {
//         marginLeft: scale(10),
//     },
//     title: {
//         fontSize: moderateScale(16),
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: moderateScale(14),
//         color: '#7f8c8d',
//     },
// });

// export default AppointmentBadge;;

import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import {calendarData} from '../../data/calendarData'
import {AppointmentBadgeProps, AppointmentT} from '../../types/index';
import CustomIcon from '../../components/CustomIcon';
import { Yes,No } from '../../assets/svg/TabBarSvg';
import {scale,heightPercentageToDP,widthPercentageToDP} from '../../utils/responsiveUtils';
import { COLORS,normalizeFontSize } from '../../theme/colors';

export const AppointmentBadge : React.FC<AppointmentBadgeProps> = ({slots, onConfirm, onReject}) =>{
    console.log("Appointbadge.tsx in compoenents")
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
            fontSize: 20,
        },
        details:{
            // flex:1,
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