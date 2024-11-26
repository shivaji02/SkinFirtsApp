import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { appointments } from '../../data/calendarData';
import { heightPercentageToDP, scale, widthPercentageToDP, normalizeFontSize } from '../../utils/responsiveUtils.ts';
import { LeagueSpartanFont } from '../../theme/fontStyle.tsx';
import { COLORS } from '../../theme/colors.tsx';

interface AgendaBoxProps {
    selectedDate: string;
}


export const AgendaBox = ({ selectedDate }: AgendaBoxProps) => {
    const appointmentsForDate = appointments[selectedDate] || [];

    if (appointmentsForDate.length === 0) {
        return (
            <View style={styles.noAppContainer}>
                <Text style={styles.noapp}>
                    No Appointments Available for today
                </Text>
            </View>
        );
    }
    console.log("AgendaBox.tsx result")
    return (
        <View >
            {appointmentsForDate.map((appointment, index) => (
                <View key={index} style={styles.Container} >
                    <Text style={styles.time}>{appointment.time}</Text>
                    <Text style={styles.doctor}>{appointment.title}</Text>
                    <Text style={styles.desc}>{appointment.description}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '10',
        shadowRadius: 20,
    },
    time: {
        color: COLORS.primary.main,
        fontFamily:LeagueSpartanFont.Light,
    },
    doctor: {
        color: COLORS.primary.dark,
        fontFamily:LeagueSpartanFont.Medium,
        fontSize:14,
    },
    desc: {
        color: COLORS.common.black,
        fontFamily:LeagueSpartanFont.Black,
        fontSize:12,


    },
    noAppContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noapp: {
        color: COLORS.error.high,
    },
});