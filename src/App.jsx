import LoginPage from './pages/LoginPage'
import { Outlet, useLocation } from 'react-router-dom';

const App =()=> {

const location = useLocation();
  return (
    <>
      <div className=" ">
        {
      location.pathname === '/' ?   <LoginPage/> : <Outlet/>
        }
      </div>
      
    </>
  )
}

export default App
