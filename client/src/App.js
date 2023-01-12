import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Splash from './Splash/Splash';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage'
import FourthPage from './FourthPage/FourthPage'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import EmailSent from './EmailSent/EmailSent'
import ResetPassword from './ResetPassword/ResetPassword'
import HomePage from './HomePage/HomePage'
import Category from './Category/Category'
import Cart from './Cart/Cart'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>

  <Route path='/' element={< Splash />} />
  <Route path='/page2' element={< SecondPage />} />
  <Route path='/page3' element={< ThirdPage />} />
  <Route path='/page4' element={< FourthPage />} />
  <Route path='/login' element={< LogIn />} />
  <Route path='/signup' element={< SignUp />} />
  <Route path='/forgotpassword' element={< ForgotPassword />} />
  <Route path='/emailsent' element={<EmailSent/>} />
  <Route path='/resetpassword' element={<ResetPassword />} />
  <Route path='/homepage' element={<HomePage />} />
  <Route path='/category' element={<Category />} />
  <Route path='/cart' element={<Cart />} />
 </Routes>
     </Router>
    </div>
  );
}

export default App;
