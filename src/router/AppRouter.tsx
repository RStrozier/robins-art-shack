import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from '../pages/TestPage/TestPage.tsx';
import AccessPage from '../pages/AccessPage/AccessPage.tsx';
import Homepage from '../pages/Homepage/Homepage.tsx';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={AccessPage} />
          <Route path="/access-granted" Component={Homepage} />
          <Route path="/robins-decisions" Component={TestPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;