export const calendarData = {
  days: [
    { date: '2023-11-20', day: 'Mon' },
    { date: '2023-11-21', day: 'Tue' },
    { date: '2023-11-22', day: 'Wed' },
    { date: '2023-11-23', day: 'Thu' },
    { date: '2023-11-24', day: 'Fri' },
    { date: '2023-11-25', day: 'Sat' },
    { date: '2023-11-26', day: 'Sun' },
    { date: '2023-11-27', day: 'Mon' },
    { date: '2023-11-28', day: 'Tue' },
    { date: '2023-11-29', day: 'Wed' },
  ],
  appointments: {
    '2023-11-21': [
      { time: '10:00 AM', title: 'Dr. Olivia Turner', description: 'Skin treatment.' },
      { time: '11:00 AM', title: 'Dr. Alexander Bennett', description: 'Follow-up.' },
    ],
    '2023-11-22': [
      { time: '2:00 PM', title: 'Dr. Sophia Martinez', description: 'Consultation.' },
    ],
    '2023-11-24': [
      { time: '4:00 PM', title: 'Dr. Michael Davidson', description: 'Routine check-up.' },
    ],
  },
  markedDates: {
    '2023-11-21': { marked: true, dotColor: 'blue' },
    '2023-11-22': { marked: true, dotColor: 'green' },
    '2023-11-24': { marked: true, dotColor: 'red' },
  },
};
