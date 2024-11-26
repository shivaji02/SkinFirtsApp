import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { appointments } from '../../data/appointments';
import { calendarData } from '../../data/calendarData';
import { scale } from '../../utils/responsiveUtils';

const CalendarWithAgenda = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2023-11-21'); // Default to today

  // Format appointments for Agenda
  const items = Object.keys(appointments).reduce((acc, date) => {
    acc[date] = appointments[date].map((appointment) => ({
      ...appointment,
    }));
    return acc;
  }, {});

  // Render each item in the agenda
  const renderItem = (item: any) => {
    return (
      <View style={styles.appointmentBox}>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={[styles.actionButton, { color: 'green' }]}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.actionButton, { color: 'red' }]}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Agenda with appointments */}
      <Agenda
        items={items}
        selected={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={calendarData.markedDates}
        renderItem={renderItem}
        renderEmptyData={() => <Text style={styles.noAppointmentsText}>No Appointments</Text>}
        theme={{
          selectedDayBackgroundColor: 'blue',
          todayTextColor: 'red',
          dotColor: 'blue',
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'black',
          agendaTodayColor: 'red',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  appointmentBox: {
    padding: scale(10),
    marginVertical: scale(5),
    backgroundColor: '#fff',
    borderRadius: scale(8),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  timeText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: scale(16),
    color: '#000',
  },
  description: {
    fontSize: scale(12),
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  actionButton: {
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  noAppointmentsText: {
    textAlign: 'center',
    marginVertical: scale(10),
    fontSize: scale(14),
    color: '#777',
  },
});

export default CalendarWithAgenda;
