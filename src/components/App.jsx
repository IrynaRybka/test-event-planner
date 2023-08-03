import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Light } from './Theme';
import { getEvents } from 'fakeApi';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const AddEventPage = lazy(() => import('pages/AddEventPage/AddEventPage'));
const EventPage = lazy(() => import('pages/EventPage/EventPage'));
const Layout = lazy(() => import('components/Layout'));

export const App = () => {
  const events = getEvents();
  const [searchParams, setSearchParams] = useSearchParams();
  const eventTitle = searchParams.get("title") ?? "";
 
  const visibleEvents = events.filter((event) =>
    event.title.toLowerCase().includes(eventTitle.toLowerCase())
  );

  const updateQuery = (title) => {
    const nextParams = title !== "" ? { title } : {};
    setSearchParams(nextParams);
  };

  return (
    <ThemeProvider theme={Light}>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout value={eventTitle} onChange={updateQuery}/>}>
          <Route index element={<HomePage events={visibleEvents}/>} />
          <Route path="addEvent" element={<AddEventPage/>} />
          <Route path="event/:id" element={<EventPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
    </ThemeProvider>
  );
};
