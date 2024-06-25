import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Homepage from '../pages/Homepage/Homepage.tsx';
import TestPage from '../pages/TestPage/TestPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
      </>
    ),
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/robins-decisions", element: <TestPage /> }
    ]
   }]);

   export default router;
