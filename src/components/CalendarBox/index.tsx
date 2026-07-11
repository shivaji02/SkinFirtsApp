import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {useDateUtilities} from '../../Hooks/getCalenderDays.ts/index.ts';
import { heightPercentageToDP,scale,widthPercentageToDP,normalizeFontSize } from '../../utils/responsiveUtils.ts';
import {LeagueSpartanFont} from '../../theme/fontStyle.tsx';
import { COLORS } from '../../theme/colors.tsx';

interface CalendarBoxProps {
  onSelectedDate: (date: string) => void;
}

export const CalendarBox = ({ onSelectedDate }: CalendarBoxProps) => {
  const { getCalendarDays } = useDateUtilities(); // Hook usage
  const calendarDays = getCalendarDays(10); // Generate 10 days
  const [selectedDate, setSelectedDate] = useState(calendarDays[1]?.date); // Default to today

  return (
    // <View style={styles.parcon}>
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
 parcon:{
  marginBottom:10,
 },
 dayBox: {
   height:heightPercentageToDP(10),
   width: widthPercentageToDP(6),
   alignItems: 'center',
   justifyContent: 'center',
   marginHorizontal: 5,
   borderRadius: 18,
   backgroundColor:COLORS.common.white,
   

 },

  selectedDay: {
    backgroundColor: COLORS.primary.main,
  },
  selectedText: {
    color: COLORS.common.white,
  },
  dayText: {
    fontSize: 15,
    color: COLORS.common.black,
  },
  dateText: {
    fontSize: normalizeFontSize(32),
    fontFamily:LeagueSpartanFont.SemiBold,
    color: COLORS.common.black,
  },
});
