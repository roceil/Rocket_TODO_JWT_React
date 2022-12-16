import React from 'react';
import axios from 'axios';
import logo from '../img/logo_lg.svg';
import '../main.css';

const url = 'https://todoo.5xcamp.us/users';

function IsLoginHeader(props) {
  const { setCurrentPage } = props;

  return (
    <main className="container mt-2  flex justify-between">
      <img className="max-w-[242.51px]" src={logo} alt="logo" />
      <div className="flex items-center">
        <p className='hidden font-bold mr-6 md:block'>Frank的React待辦</p>

        <input
          className="md:hover:ring-1 md:hover:rounded-lg md:ring-black cursor-pointer p-2"
          type="button"
          value="登出"
          onClick={(e) => {
            alert(`還沒好`);
          }}
        />
      </div>
    </main>
  );
}

export default IsLoginHeader;
