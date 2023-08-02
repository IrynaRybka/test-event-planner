import galleryImg from './imgStorage/Rectangle-7des.jpg';

const events = [
    { id: "e-1", title: "Galery Opening", description: "Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.", image: `${galleryImg}` },
    { id: "e-2", title: "" },
    { id: "e-3", title: "" },
    { id: "e-4", title: "" },
    { id: "e-5", title: "" },
    { id: "e-6", title: "" },
    { id: "e-7", title: "" },
    { id: "e-8", title: "" },
   
  ];

export const getEvents = () => {
    return events;
  };
export const getEventById = (eventId) => {
    return events.find((event) => event.id === eventId);
  };  