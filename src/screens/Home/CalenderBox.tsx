import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { calendarData } from '../../data/calendarData';

// Define types
type Appointment = {
  time: string;
  title: string;
  description: string;
};

type CalendarData = {
  appointments: {
    [key: string]: Appointment[];
  };
};

const CalendarWithAgenda: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2023-11-21'); // Default to today

  // Prepare agenda items for the first 4 hours
  const getItemsForDate = (date: string) => {
    const currentHour = new Date().getHours();
    const appointmentsForDay = calendarData.appointments[date] || [];
    return appointmentsForDay.filter((appointment) => {
      const [hour] = appointment.time.split(':');
      return parseInt(hour) >= currentHour && parseInt(hour) < currentHour + 4;
    });
  };

  const items = Object.keys(calendarData.appointments).reduce((acc, date) => {
    acc[date] = getItemsForDate(date);
    return acc;
  }, {} as { [key: string]: Appointment[] });

  // Render individual appointment items
  const renderItem = (item: Appointment) => (
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

  return (
    <Agenda
      items={items}
      selected={selectedDate}
      renderItem={renderItem}
      onDayPress={(day) => setSelectedDate(day.dateString)}
    />
  );
};

const styles = StyleSheet.create({
  appointmentBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CalendarWithAgenda;