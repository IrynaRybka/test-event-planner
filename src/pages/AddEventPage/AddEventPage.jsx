import { NavLink, useLocation } from 'react-router-dom';
import { ContainerDiv } from '../HomePage/HomePage.styled';

const AddEventPage = () => {
  const location = useLocation();
  return (
    <ContainerDiv>
      <NavLink to={location.state?.from ?? '/'}>Go Back</NavLink>
      <h1>Create new event</h1>
      <form>
        <label>
          Title
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Title"
            name="query"
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            autoComplete="off"
            placeholder="Description"
            name="query"
          />
        </label>
        <label>
          Select date
          <input
            type="date"
            autoComplete="off"
            placeholder="Select date"
            name="query"
          />
        </label>
        <label>
          Select time
          <input
            type="time"
            autoComplete="off"
            placeholder="Search by keywords"
            name="query"
          />
        </label>
        <label>Location
        <input
          type="text"
          autoComplete="off"
          placeholder="Search by keywords"
          name="query"
        />
        </label>
        <label >
        Category
        <input
          type="text"
          autoComplete="off"
          placeholder="Search by keywords"
          name="query"
        />
        </label>
        <label >
        Add picture
        <input
          type="text"
          autoComplete="off"
          placeholder="Search by keywords"
          name="query"
        />
        </label>
        <label >
        Priority
        <input
          type="text"
          autoComplete="off"
          placeholder="Search by keywords"
          name="query"
        />
        </label>
        <button type="submit">Add event</button>
      </form>
    </ContainerDiv>
  );
};
export default AddEventPage;
