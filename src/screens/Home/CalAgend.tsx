import { CalendarBox } from "../../components/CalendarBox";
import { AgendaBox } from "../../components/AgendaBox";
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP,widthPercentageToDP,scale } from "../../utils/responsiveUtils";
import { COLORS } from "../../theme/colors";


const CalAgend =()=>{
const [selectedDate,setSelectedDate] = useState('2024-11-26');

return(
<View style={styles.container}>
<CalendarBox onSelectedDate ={setSelectedDate}/>
<AgendaBox selectedDate={selectedDate} />

</View>
)
};

const styles = StyleSheet.create({
    container:{
        
     height: heightPercentageToDP(15),
    justifyContent:'center',
    marginLeft:scale(15),
    marginRight:scale(15),
    // backgroundColor:COLORS.primary[300],
    borderRadius:scale(10),
    },
});

export default CalAgend;