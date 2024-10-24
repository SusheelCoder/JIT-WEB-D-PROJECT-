import About from './components/Webpages/About/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MissionAndVision from './components/Webpages/Mission and Vision/MissionAndVision';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
function App() {

  const router = createBrowserRouter([
    {
      path:'/', 
      element:<LandingPage/>,
      errorElement: <NotFound/>,
    },
    {path:'/about', element:<About/>},
    {path:'/mission', element: <MissionAndVision/>}
  ]);
  return (
    
      <>
        {/* <Header/> */}
        <RouterProvider router={router}/>
        {/* <Main/> */}
        {/* <Footer/> */}
        
      </>

  
    
  );
}

export default App;
