import { nanoid } from 'nanoid';
// import * as Yup from 'Yup';
import { ContainerDiv } from '../HomePage/HomePage.styled';
import { useState } from 'react';
import defaultImg from '../../assets/images/default-des.jpg';
import { addEvent } from 'fakeApi';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import {
  AddBtn,
  ContainerForm,
  CustomDate,
  CustomForm,
  CustomSelect,
  Input,
  Label,
  TaglineAdd,
  TextDescription,
} from './AddEventPage.styled';

const AddEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  // const events = getEvents();

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
    // const schema = Yup.object().shape({
    //   title: Yup.string().required().minLength(3).maxLength(50).matches(/^[a-zA-Z0-9- ]+$/),
    //   description: Yup.string().required(),
    //   date: Yup.date().default(() => new Date()),
    //   time: Yup.default(() => new Date()),
    //   city: Yup.string().required().matches(/^[a-zA-Z0-9- ]+<span class="math-inline">/),
    //   category: Yup.string().required(),
    //   priority: Yup.string().required(),
    // });

    // const validationResult = schema.validate(newEvent);
    // if (validationResult.errors) {
    //   <p>Validation error</p>;
    //   return false;
    // }
    addEvent(newEvent);
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
      <GoBackBtn />
      <TaglineAdd>Create new event</TaglineAdd>
      <ContainerForm>
        <CustomForm onSubmit={onAddEvent} validate={true}>
          <Label htmlFor="title">
            Title
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            {/* <CloseBtn>
                <CrossIcon id="icon-cross-small" width={24} height={24} />
              </CloseBtn> */}
          </Label>

          <Label>
            Description
            <TextDescription
              type="text"
              autoComplete="off"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </Label>

          <Label>
            Select date
            <CustomDate
              type="date"
              autoComplete="off"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </Label>

          <Label>
            Select time
            <CustomDate
              type="time"
              autoComplete="off"
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            />
          </Label>

          <Label>
            Location
            <Input
              type="text"
              autoComplete="off"
              name="city"
              value={city}
              onChange={e => setCity(e.target.value)}
              required
            />
            {/* <CloseBtn>
                <CrossIcon id="icon-cross-small" width={24} height={24} />
              </CloseBtn> */}
          </Label>

          <Label>
            Category
            <CustomSelect
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
            </CustomSelect>
          </Label>

          <Label style={{ color: '#ACA7C3' }}>
            Add picture
            <Input type="file" accept="image/*" name="picture" disabled />
          </Label>

          <Label>
            Priority
            <CustomSelect
              required
              name="priority"
              value={priority}
              onChange={e => setPriority(e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="Heigh">Heigh</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </CustomSelect>
          </Label>
          <AddBtn type="submit">Add event</AddBtn>
        </CustomForm>
      </ContainerForm>
    </ContainerDiv>
  );
};
export default AddEventPage;
