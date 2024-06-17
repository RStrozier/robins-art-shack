import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Homepage} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;