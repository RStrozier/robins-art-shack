import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from '../pages/TestPage/TestPage.tsx';
import Homepage from '../pages/Homepage/Homepage.tsx';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/robins-decisions" Component={TestPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;