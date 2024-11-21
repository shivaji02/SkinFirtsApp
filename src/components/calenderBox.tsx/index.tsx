import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/responsiveUtils'; // For responsiveness
import { calendarData } from '../../data/calendarData'; // Data for the calendar

const CalendarBox = ({ data }: { data: typeof calendarData }) => {
  return (
    <View style={styles.container}>
      {/* Week Days */}
      <FlatList
        horizontal
        data={data.dates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.dayBox, index === 2 ? styles.selectedDay : null]}>
            <Text style={styles.dateText}>{item}</Text>
            <Text style={styles.dayText}>{data.week[index]}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={true} // For horizontal scroll bar
        
      />

      {/* Appointments */}
      <View style={styles.appointmentContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: '#e0ebff',
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(20),
  },
  dayBox: {
    width: scale(50),
    height: verticalScale(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    marginHorizontal: scale(5),
    backgroundColor: '#ffffff',
  },
  selectedDay: {
    backgroundColor: '#4a90e2',
  },
  dateText: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#000',
  },
  dayText: {
    fontSize: scale(14),
    color: '#555',
  },
  appointmentContainer: {
    marginTop: verticalScale(10),
  },
  appointmentBox: {
    flexDirection: 'row',
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedAppointment: {
    borderColor: '#4a90e2',
    backgroundColor: '#dbeaff',
  },
  timeText: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#333',
    width: scale(60),
  },
  details: {
    marginLeft: scale(10),
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: scale(14),
    color: '#555',
  },
});

export default CalendarBox;
