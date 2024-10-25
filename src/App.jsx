import About from './components/Webpages/About Us/About/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MissionAndVision from './components/Webpages/About Us/Mission and Vision/MissionAndVision';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import ShortTerm from './components/Webpages/Courses/Short Term Courses/ShortTerm';
import LongTerm from './components/Webpages/Courses/Long Term Courses/LongTerm';
import JITCourses from './components/Webpages/Courses/JIT Courses/JITCourses';
function App() {

  const router = createBrowserRouter([
    {
      path:'/', 
      element:<LandingPage/>,
      errorElement: <NotFound/>,
    },
    {path:'/about', element: <About/> },
    {path:'/mission', element: <MissionAndVision/>},
    {path: '/short-term-courses', element:<ShortTerm/>},
    {path: '/long-term-courses', element:<LongTerm/>},
    {path: '/jit-courses', element:<JITCourses/>},
  ]);
  return (
    
      <>
        <RouterProvider router={router}/>
      </>

  
    
  );
}

export default App;
