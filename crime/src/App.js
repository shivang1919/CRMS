import React from 'react'
// import Navbar from './components/Navbar';
import Frontpage from './components/frontpage/Frontpage';
import Userlogin from './components/Loginpages/Userlogin';
import Policelogin from './components/Loginpages/PoliceLogin';
import UserSignUp from './components/Signuppages/UserSignUp';
import PoliceSignUp from './components/Signuppages/PoliceSignUp';
import VerifyOtpUser from './components/verifyotppage/VerifyOtpUser';
import Logincards from './components/logincards/Logincards';
import Missingperson from './components/missingpersonpage/Missingperson';
import Firpage from './components/firpage/Firpage';
import Userpage from './components/userpage/Userpage';
import Policepage from './components/policepage/Policepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div >
      {/* <Navbar/>  */}
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage/>}/>
          <Route path='/signin/users/login/' element={<Userlogin/>}/>
          <Route path='/signin/users/login/users/register' element={<UserSignUp/>}/>
          <Route path='/signin/police/login' element={<Policelogin/>}/>
          <Route path='/signin/police/login/police/register' element={<PoliceSignUp/>}/>
          <Route path='/signin/users/login/verifyOtp' element={<VerifyOtpUser/>}/>
          <Route path='/signin' element={<Logincards/>}/>
          <Route path='/signin/police/login/missingpersonbureau' element={<Missingperson/>}/>
          <Route path='/signin/police/login/fir' element={<Firpage/>}/>
          <Route path='/signin/users/login/verifyOtp/userspage' element={<Userpage/>}/>
          <Route path='/signin/police/login/policepage' element={<Policepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
