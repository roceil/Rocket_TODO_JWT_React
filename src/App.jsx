import { React, useState } from 'react';
// import logo from './img/logo_lg.svg';
import './main.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import IsLogin from './components/isLogin';
// import SignUp from './components/SignUp';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');

  return (
    <>
      {currentPage === 'Login' && (<Login setCurrentPage={setCurrentPage} />)}
      {currentPage === 'SignUp' && (<SignUp setCurrentPage={setCurrentPage} />)}
      {currentPage === 'IsLogin' && (<IsLogin setCurrentPage={setCurrentPage} />)}
    </>
  );
}

export default App;
