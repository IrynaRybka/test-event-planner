import { nanoid } from 'nanoid';
import { ContainerDiv } from '../HomePage/HomePage.styled';
import { useState } from 'react';
import defaultImg from '../../assets/images/default-des.jpg';
import { getEvents, addEvent } from 'fakeApi';
import { toast } from 'react-toastify';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const AddEventPage = () => {
 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  // const [isOpen, setIsOpen] = useState(false);
  const events = getEvents();

  const onAddEvent = event => {
    event.preventDefault();
    const newEvent = {
      id: nanoid(),
      title: title,
      description: description,
      image: defaultImg,
      date: date,
      time: time,
      location: city,
      category: category,
      priority: priority,
    };
    console.log(newEvent);
    if (events.some(event => event.title === newEvent.title)) {
      toast.warn(`${newEvent.title} has in your event planner!`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return false;
    }
    addEvent(newEvent);
    toast.warn(`${newEvent.title} was successful added!`, {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });
    reset();
  };

  const reset = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setCity('');
    setCategory('');
    setPriority('');
  };

  return (
    <ContainerDiv>
      <GoBackBtn/>
      <h1>Create new event</h1>
      <form onSubmit={onAddEvent}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description
          <textarea
            type="text"
            autoComplete="off"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            // resize="none"
          />
        </label>
        <br />
        <label>
          Select date
          <input
            type="date"
            autoComplete="off"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Select time
          <input
            type="time"
            autoComplete="off"
            name="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Location
          <input
            type="text"
            autoComplete="off"
            placeholder="Search by keywords"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Category
          <select
            required
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
         
          >
            <option value="">Select category</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Party">Party</option>
            <option value="Sport">Sport</option>
          </select>
        </label>
        <br />
        <label>
          Add picture
          <input type="file"
        accept="image/*"  name="picture" disabled />
        </label>
        <label>
          Priority
          <select
            required
            name="priority"
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option value="">Select priority</option>
            <option value="Heigh">Heigh</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <button type="submit">Add event</button>
      </form>
    </ContainerDiv>
  );
};
export default AddEventPage;
