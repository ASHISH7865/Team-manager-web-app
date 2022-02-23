import React, { useEffect } from 'react'
import {Routes , Route} from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './config';
import { userAction } from './app/userSlice';
import { fetchData } from './app/teamSlice';
import SignUp from './components/SignUp/Signup';
import Logo from './components/Logo/Logo'
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

import './App.scss'





const App = () => {
  const user = useSelector((state) => state.user.user); 
  const dataChange = useSelector((state) => state.team.dataChange);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchData())
  },[dataChange])

 
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
    
  },[]);
  
  
  
  return (
  <div className='app'> 
   
    <Logo />
    
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    { user &&  <Route path='/dashboard' element={<Dashboard  /> } /> }
    </Routes>
    
    
  </div>
  )
}

export default App