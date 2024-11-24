import About from './components/Webpages/About Us/About/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MissionAndVision from './components/Webpages/About Us/Mission and Vision/MissionAndVision';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import ShortTerm from './components/Webpages/Courses/Short Term Courses/ShortTerm';
import LongTerm from './components/Webpages/Courses/Long Term Courses/LongTerm';
import JITCourses from './components/Webpages/Courses/JIT Courses/JITCourses';
import AdmissionSearch from './components/Webpages/Admission/search Admission/AdmissionSearch';
import CertificateVerify from './components/Webpages/Admission/Certificate Verification/CertificateVerify';
import Gallery from './components/Webpages/Gallery/Gallery';
import Contact from './components/Webpages/Contact us/Contact';
import ApplyOnline from './components/Webpages/Admission/applyOnlineForm/Applyonline';
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
    {path: '/reg_form_search', element:<AdmissionSearch/>},
    {path: '/certificate', element:<CertificateVerify/>},
    {path: '/gallery', element:<Gallery/>},
    {path: '/contact', element:<Contact/>},
    {path: '/applyOnline', element:<ApplyOnline/>},
    
    
  ]);
  return (
    
      <>
        <RouterProvider router={router}/>
      </>

  
    
  );
}

export default App;
