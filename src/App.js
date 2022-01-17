import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Header } from './header/index.js';
import { Profile } from './profile/index.js';
import { WriteReview } from './review/index.js';
import YongSanSeatPage from './pages/YongSanSeatPage.js';
import YSeatPage from './pages/YSeatPage.js';
import WSeatPage from './pages/WSeatPage.js';
import CSeatPage from './pages/CSeatPage.js';
import Seats from './pages/Seats.js';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div className='headerMain'>
            <Header />
          </div>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/SignUp' element={<SignUp />}></Route>
              <Route path='/MyPage/:nickName' element={<Profile />}></Route>
              <Route path='/ReadReview/:reviewNo' element={<Review />}></Route>
              <Route path='/WriteReview/:theaterId/:theaterRow/:theaterColumn' element={<WriteReview />}></Route>
              <Route path='/Seats' element={<Seats />}></Route>
              <Route path='/YongsanSeat' element={<YongSanSeatPage/>}></Route>
              <Route path='/Y_Seat' element={<YSeatPage/>}></Route>
              <Route path='/W_Seat' element={<WSeatPage/>}></Route>
              <Route path='/C_Seat' element={<CSeatPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;