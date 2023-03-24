import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div style={{width:'150%', height:'150%', margin:'10px'}}>
      <Calendar value={date} onChange={handleDateChange} />
    </div>
  );
}

export default MyCalendar;