export let appointmentData: Object[] = (() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  return [
  {
    id: 1,
    title: 'Annual Checkup',
    patient: 'John Smith',
    type: 'consultation',
    priority: 'medium',
      StartTime: new Date(year, month, date, 9, 30),
      EndTime: new Date(year, month, date, 10, 30),
    location: 'Exam Room 1',
    notes: 'Patient needs follow-up on blood pressure'
  },
  {
    id: 2,
    title: 'Dental Cleaning',
    patient: 'Sarah Johnson',
    type: 'checkup',
    priority: 'low',
    StartTime: new Date(year, month, date, 9),
      EndTime: new Date(year, month, date, 10, 30),
    location: 'Dental Suite 3',
    notes: 'Regular 6-month cleaning'
  },
  {
    id: 3,
    title: 'Knee Surgery Follow-up',
    patient: 'Michael Brown',
    type: 'surgery',
    priority: 'high',
       StartTime: new Date(year, month, date, 12),
      EndTime: new Date(year, month, date, 13),
    location: 'Surgical Center',
    notes: 'Post-op check, remove stitches'
  },
  {
    id: 4,
    title: 'Nutrition Consultation',
    patient: 'Emily Davis',
    type: 'consultation',
    priority: 'medium',
     StartTime: new Date(year, month, date, 15),
      EndTime: new Date(year, month, date, 18),
    location: 'Wellness Room 2',
    notes: 'Discuss diabetes management'
  },
  {
    id: 5,
    title: 'Physical Therapy',
    patient: 'David Wilson',
    type: 'evaluation',
    priority: 'medium',
  StartTime: new Date(year, month, date, 14),
      EndTime: new Date(year, month, date, 16),
    location: 'PT Room A',
    notes: 'Shoulder rehabilitation session'
  },
  {
    id: 6,
    title: 'Lunch Break',
    patient: '',
    type: 'break',
    priority: 'low',
  StartTime: new Date(year, month, date, 14, 30),
      EndTime: new Date(year, month, date, 18, 30),
    location: 'Staff Lounge',
    notes: ''
  }
];
})();

export type AppointmentData = typeof appointmentData;