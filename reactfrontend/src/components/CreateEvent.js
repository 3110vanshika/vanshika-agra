import React, {useState} from 'react'
import Header from './Header'
import axios from 'axios';

export default function CreateEvent() {
    const [eventName, setEventName] = useState('');
    const [data, setData] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
  
    const handleCreateEvent = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('event_name', eventName);
      formData.append('data', data);
      formData.append('time', time);
      formData.append('location', location);
      formData.append('image', image);
  
      try {
        const response = await axios.post(
          'http://localhost:8000/api/events/', // Update with your API URL
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        console.log('Event created:', response.data);
        // Handle successful event creation, like showing a success message
      } catch (error) {
        console.error('Error creating event:', error);
        // Handle error, like showing an error message
      }
    };
  return (
    <div>
      <Header />
      <div className='CreateEvent'>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <div className='mb'>
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className='mb'>
          <label>Event Date</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className='mb'>
          <label>Event Time</label>
          <input
            type="text"
            name='time'
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className='mb'>
          <label>Event Location</label>
          <input
            type="text"
            name='location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {/* Add other input fields for data, time, location, and image */}
        <div>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>
    </div>
  )
}
