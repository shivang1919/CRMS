import React from 'react'
import Navbar from './components/Navbar';
import Frontpage from './components/frontpage/Frontpage';
import Userlogin from './components/Loginpages/Userlogin';
import Policelogin from './components/Loginpages/PoliceLogin';
import UserSignUp from './components/Signuppages/UserSignUp';
import PoliceSignUp from './components/Signuppages/PoliceSignUp';
import VerifyOtpUser from './components/verifyotppage/VerifyOtpUser';
import Logincards from './components/logincards/Logincards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div >
      <Navbar /> 
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage/>}/>
          <Route path='/users/login' element={<Userlogin/>}/>
          <Route path='/users/login/users/register' element={<UserSignUp/>}/>
          <Route path='/police/login' element={<Policelogin/>}/>
          <Route path='/police/login/police/register' element={<PoliceSignUp/>}/>
          <Route path='/users/login/verifyOtp' element={<VerifyOtpUser/>}/>
          <Route path='/signin' element={<Logincards/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
