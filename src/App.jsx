import { React, useState } from 'react';
import './main.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import IsLogin from './pages/IsLogin';

function App() {
  const [currentPage, setCurrentPage] = useState();

  const checkType = (() => {
    switch (currentPage) {
      case 'Login': {
        return <Login setCurrentPage={setCurrentPage} />;
        break;
      }
      case 'SignUp': {
        return <SignUp setCurrentPage={setCurrentPage} />;
        break;
      }
      case 'IsLogin': {
        return <IsLogin setCurrentPage={setCurrentPage} />;
        break;
      }
      default: {
        if (localStorage.getItem('authorization')) {
          setCurrentPage(`IsLogin`);
        } else {
          setCurrentPage('Login');
        }
        break;
      }
    }
  })();

  return <>{checkType}</>;
}

export default App;
