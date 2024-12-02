import { CalendarBox } from "../../components/CalendarBox";
import { AgendaBox } from "../../components/AgendaBox";
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP, scale } from "../../utils/responsiveUtils";
import { COLORS } from "../../theme/colors";


const CalAgend = () => {
    const [selectedDate, setSelectedDate] = useState('2024-11-26');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <CalendarBox onSelectedDate={setSelectedDate} />
                <AgendaBox selectedDate={selectedDate} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.primary[300],
        padding: 10,
        paddingVertical: 20,
        height:heightPercentageToDP(25),
    },
    container: {
         height: heightPercentageToDP(22),
        justifyContent: 'center',
        marginLeft: scale(10),
        marginRight: scale(5),
        borderRadius: scale(10),
        gap: 10,
    },
});

export default CalAgend;