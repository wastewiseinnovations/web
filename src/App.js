import './App.css';
import NavBar from './components/nav/NavBar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import HomePage from './pages/Homepage';
import { Simulator } from './pages/Simulator';
import Form from './components/form/Form';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import { Another } from './pages/Another';
import HelpPage from './pages/HelpPage';

const LazyResults = lazy(() => import("./pages/Results"));


function App() {
  return (
    <Router basename='/web'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/simulator" element={<Simulator />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path='/simulator/results' element={
        <Suspense fallback={<Loading />}>
          <LazyResults />
        </Suspense>
      } />
    </Routes>
    </Router>
  );
}

export default App;
