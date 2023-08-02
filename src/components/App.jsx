import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Light } from './Theme';

const HomePage = lazy(() => import('pages/HomePage'));
const AddEventPage = lazy(() => import('pages/AddEventPage'));
const EventPage = lazy(() => import('pages/EventPage'));
const Layout = lazy(() => import('components/Layout'));

export const App = () => {
  return (
    <ThemeProvider theme={Light}>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="addEvent" element={<AddEventPage/>} />
          <Route path="event" element={<EventPage />} />
        </Route>
      </Routes>
    </Suspense>
    </ThemeProvider>
  );
};
