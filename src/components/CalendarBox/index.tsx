import { getCalendarDays } from '../../Hooks/getCalenderDays.ts/index.ts';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { heightPercentageToDP,scale,widthPercentageToDP,normalizeFontSize } from '../../utils/responsiveUtils.ts';
import {LeagueSpartanFont} from '../../theme/fontStyle.tsx';
import { COLORS } from '../../theme/colors.tsx';
interface CalendarBoxProps {
  onSelectedDate: (date: string) => void;
}

export const CalendarBox = ({ onSelectedDate }: CalendarBoxProps) => {
  const [selectedDate, setSelectedDate] = useState(getCalendarDays()[1].date); // Default to today
  const calendarDays = getCalendarDays();

//   console.log('Calendar Days:', calendarDays); // Debugging log to check if days are generated
console.log("CalenderBox.tsx in components")
  return (
    <FlatList
      horizontal
      data={calendarDays}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            setSelectedDate(item.date);
            onSelectedDate(item.date);
          }}
          style={[
            styles.dayBox,
            selectedDate === item.date ? styles.selectedDay : null,
          ]}
        >
            <Text style={selectedDate === item.date ? [styles.dateText, styles.selectedText] : styles.dateText}>
            {item.date.split('-')[2]}
            </Text>
            <Text style={selectedDate === item.date ? [styles.dayText, styles.selectedText] : styles.dayText}>
            {item.day.toUpperCase()}
            </Text>
           
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
     paddingHorizontal: 10,
     gap:widthPercentageToDP(2),
  },
  dayBox: {

    height:heightPercentageToDP(10),
    width: widthPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // marginHorizontal: 5,
    borderRadius: 18,

  },

  selectedDay: {
    backgroundColor: COLORS.primary.main,
  },
  selectedText:{
    color:COLORS.common.white,
  },
  dayText: {
    fontSize: normalizeFontSize(15),
    fontFamily:LeagueSpartanFont.Light,
    color: COLORS.common.black,
  },
  dateText: {
    fontSize: normalizeFontSize(25),
    fontFamily: LeagueSpartanFont.SemiBold,
    color: COLORS.common.black,
  },
});
