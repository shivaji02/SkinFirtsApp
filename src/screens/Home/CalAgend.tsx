import { CalendarBox } from "../../components/CalendarBox";
import { AgendaBox } from "../../components/AgendaBox";
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP,widthPercentageToDP,scale } from "../../utils/responsiveUtils";
const CalAgend =()=>{
    
const [selectedDate,setSelectedDate] = useState('2024-11-26');

return(
<View style={styles.container}>
<CalendarBox onSelectedDate ={setSelectedDate}/>
<AgendaBox selectedDate={selectedDate} />

</View>
)
}

const styles= StyleSheet.create({
    container:{
        // flexDirection:'column',
        gap:scale(10),
        height: heightPercentageToDP(15),
        justifyContent:'center',
        // width:widthPercentageToDP(90),
    },
})

export default CalAgend;