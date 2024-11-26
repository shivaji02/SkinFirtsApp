import { getCalendarDays } from '../../Hooks/getCalenderDays.ts/index.ts';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { heightPercentageToDP,scale,widthPercentageToDP } from '../../utils/responsiveUtils.ts';
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
        // Ensure you return JSX here
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
          <Text style={styles.dayText}>{item.day}</Text>
          <Text style={styles.dateText}>{item.date.split('-')[2]}</Text>
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
  },
  dayBox: {

    height:heightPercentageToDP(10),
    width: widthPercentageToDP(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#fff',

  },
  selectedDay: {
    backgroundColor: '#4a90e2',
  },
  dayText: {
    fontSize: 14,
    color: '#555',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
