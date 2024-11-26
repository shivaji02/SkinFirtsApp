import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { appointments } from '../../data/calendarData';

interface AgendaBoxProps {
    selectedDate: string;
}


export const AgendaBox = ({ selectedDate }: AgendaBoxProps) => {
    const appointmentsForDate = appointments[selectedDate] || [];

    if (appointmentsForDate.length === 0) {
        return <Text >
            No Appointements Available for today
        </Text>;
    }
    console.log("AgendaBox.tsx result")
    return (
        <View >
            {appointmentsForDate.map((appointment, index) => (
                <View key={index} style={styles.Container} >
                    <Text >{appointment.time}</Text>
                    <Text>{appointment.title}</Text>
                    <Text>{appointment.description}</Text>
                </View>
            ))}
        </View>
    );
};

const  styles= StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'center',
        gap:'10',
    }
})