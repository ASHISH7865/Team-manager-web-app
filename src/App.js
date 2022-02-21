import React, { useEffect } from 'react'
import {Routes , Route} from 'react-router'
import SignUp from './components/SignUp/Signup';
import './App.scss'
import Logo from './components/Logo/Logo'
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './config';
import { userAction } from './app/userSlice';



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
     auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          userAction.login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(userAction.logout());
      }
    });
    
  });
  return (
  <div className='app'> 
 
    <Logo />

    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    
  </div>
  )
}

export default App