import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';
import NewPost from './pages/NewPost/NewPost';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/SignUp/Signup';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/>} ></Route>
          <Route path='/new-post' element={<NewPost/>} ></Route>
          <Route path='/sign-in' element={<SignIn/>} ></Route>
          <Route path='/sign-up' element={<Signup/>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
