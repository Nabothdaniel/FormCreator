import LoginPage from './pages/LoginPage'
import { Outlet, useLocation } from 'react-router-dom';

const App =()=> {

const location = useLocation();
  return (
    <>
      <div className="h-[100vh] w-[100%] ">
        {
      location.pathname === '/' ?   <LoginPage/> : <Outlet/>
        }
      </div>
      
    </>
  )
}

export default App
