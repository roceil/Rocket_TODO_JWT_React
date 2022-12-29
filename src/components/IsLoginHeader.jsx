import React from 'react';
import logo from '../img/logo_lg.svg';
import '../main.css';

const url = 'https://todoo.5xcamp.us/users';


const userName = localStorage.getItem(`userName`)

function IsLoginHeader({ setCurrentPage }) {
  const clearLocalStorage = () => {
    localStorage.clear()
    alert('登出成功')
    setCurrentPage(`Login`)
  };
  return (
    <main className="container mt-2  flex justify-between">
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
