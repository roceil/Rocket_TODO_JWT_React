import React from 'react';
import Swal from 'sweetalert2';
import logo from '../img/logo_lg.svg';
import '../main.css';

const url = 'https://todoo.5xcamp.us/users';


const logout=()=>{
  Swal.fire({
    icon: 'success',
    title: '登出成功',
    showConfirmButton: false,
    timer: 1500
  })
}

function IsLoginHeader({ setCurrentPage }) {
  const userName = localStorage.getItem(`userName`)
  const clearLocalStorage = () => {
    localStorage.clear()
    logout()
    setTimeout(()=>{
      setCurrentPage(`Login`)
    },1700)
    
  };
  return (
    <main className="container pt-2  flex justify-between">
      <img className="max-w-[242.51px]" src={logo} alt="logo" />
      <div className="flex items-center">
        <p className="hidden font-bold mr-6 md:block">{userName}的待辦事項</p>

        <input
          className="md:hover:ring-1 md:hover:rounded-lg md:ring-black cursor-pointer p-2"
          type="button"
          value="登出"
          onClick={clearLocalStorage}
        />
      </div>
    </main>
  );
}

export default IsLoginHeader;
