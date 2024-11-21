import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AppointmentT} from '../../types/index';
// import { CalendarHeaderProps } from 'react-native-calendars/src/calendar/header';
import { scale, verticalScale, moderateScale } from '../../utils/responsiveUtils'; // For responsiveness
import { COLORS } from '../../theme/colors';

const AppointmentBadge: React.FC<{ data: { appointments: AppointmentT[] } }> = ({ data }) => {
    return (
        <View>
            {data.appointments.map((appointment, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.appointmentBox,
                        appointment.isSelected ? styles.selectedAppointment : null,
                    ]} 
                >
                    <Text style={styles.timeText}>{appointment.time}</Text>
                    <View style={styles.details}>
                        <Text style={styles.title}>{appointment.title}</Text>
                        <Text style={styles.description}>{appointment.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    appointmentBox: {
        flexDirection: 'row',
        padding: moderateScale(10),
        borderRadius: moderateScale(12),
        marginBottom: verticalScale(20),
        backgroundColor: COLORS.primary[300],
    },
    selectedAppointment: {
        backgroundColor: '#e0ebff',
    },
    timeText: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    details: {
        marginLeft: scale(10),
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    description: {
        fontSize: moderateScale(14),
        color: '#7f8c8d',
    },
});

export default AppointmentBadge;;