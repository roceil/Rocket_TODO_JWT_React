// import { useState } from "react";
import logo from './assets/img/logo_lg.svg';
import './main.css';

function Login() {
  return (
    <>
      {/* header */}
      <header className="mt-12 mb-8">
        <div className="flex flex-col justify-center items-center">
          <a className="mb-[21.59px]" href="#">
            <img src={logo} alt="logo" />
          </a>
          <p className="text-xl font-bold">最實用的線上待辦事項服務</p>
        </div>
      </header>

      {/* form */}
      <main>
        <form className="container">
          {/* email */}
          <label className="flex flex-col mb-4">
            <span className="block mb-1 text-sm font-bold">Email</span>
            <input
              className="min-w-[304px] py-3 pl-4 rounded-[10px] peer"
              type="email"
              placeholder="請輸入Email"
            />
            <span
              className="peer-invalid:invisible visible mt-[3px] text-sm text-[#D87355] font-bold"
            >
              此欄位不可為空
            </span>
          </label>

          {/* Password */}
          <label className="flex flex-col mb-[27px]">
            <span className="block mb-1 text-sm font-bold">Password</span>
            <input
              className="min-w-[304px] py-3 pl-4 rounded-[10px]"
              type="password"
              placeholder="請輸入密碼"
            />
          </label>

          {/* 登入按鈕 */}
          <div className="flex justify-center mb-2">
            <input
              className=" py-3 px-12 bg-[#333333] text-white font-bold rounded-[10px] cursor-pointer"
              type="button"
              value="登入"
            />
          </div>

          {/* 註冊按鈕 */}
          <div className="flex justify-center">
            <input
              className="w-[128px] py-3 font-bold md:hover:bg-[#333333] md:hover:text-white rounded-[10px] cursor-pointer"
              type="button"
              value="註冊帳號"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
