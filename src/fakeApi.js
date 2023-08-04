import galleryImg from './assets/imgStorage/Rectangle-7des.jpg';
import innovationImg from './assets/imgStorage/Rectangle-6des.jpg';
import creativityImg from './assets/imgStorage/Rectangle-5des.jpg';
import soireeImg from './assets/imgStorage/Rectangle-4des.jpg';
import conferenceImg from './assets/imgStorage/Rectangle-3des.jpg';
import startupImg from './assets/imgStorage/Rectangle-2des.jpg';
import concertImg from './assets/imgStorage/Rectangle-1des.jpg';
import extremeImg from './assets/imgStorage/Rectangle-des.jpg';

const events = [
  {
    id: 'e-1',
    title: 'Gallery Opening',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    image: `${galleryImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-2',
    title: 'Innovation Summit',
    description:
      'Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit. ',
    image: `${innovationImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-3',
    title: 'Empower Your Creativity',
    description:
      'Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.',
    image: `${creativityImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-4',
    title: 'Summer Soiree',
    description:
      'Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.',
    image: `${soireeImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-5',
    title: 'Leadership Conference',
    description:
      'Unlock the secrets of effective leadership at our transformative Success Leadership Conference.',
    image: `${conferenceImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-6',
    title: 'Tech Startup Showcase',
    description:
      'Witness the future of technology as innovative startups showcase their groundbreaking ideas.',
    image: `${startupImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-7',
    title: 'Acoustic Garden Concert',
    description:
      'Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.',
    image: `${concertImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
  {
    id: 'e-8',
    title: 'Extreme Adventure Race',
    description:
      'Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.',
    image: `${extremeImg}`,
    date: '18.10',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Heigh',
  },
];

export const getEvents = () => {
  return events;
};

export const getEventById = eventId => {
  return events.find(event => event.id === eventId);
};

export const addEvent = newEvent => {
  events.push(newEvent);
  return true; 
};

export const deleteEventById = eventId => {
  const index = events.findIndex(event => event.id === eventId);
  if (index !== -1) {
    events.splice(index, 1);
    return true; 
  }
  return false; 
};

