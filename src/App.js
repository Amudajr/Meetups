import { Routes, Route } from 'react-router-dom'; 
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetupPage from './pages/NewMeetups';
import FavoritePage from './pages/Favorites';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUpsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
