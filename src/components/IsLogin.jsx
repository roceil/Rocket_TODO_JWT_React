import { React, useState } from 'react';
import axios from 'axios';
import plus from '../img/plus 1.svg';
import check from '../img/check 1.svg';
import '../main.css';
import IsLoginHeader from './IsLoginHeader';

const url = 'https://todoo.5xcamp.us/users';

const SignUpApi = async (
  emailTxt,
  nicknameTxt,
  passwordTxt,
  checkPasswordTxt,
  setCurrentPage
) => {
  if (
    emailTxt === `` ||
    nicknameTxt === `` ||
    passwordTxt === `` ||
    checkPasswordTxt === ``
  ) {
    alert('請確認所有欄位是否都有輸入');
    return;
  }
  if (passwordTxt !== checkPasswordTxt) {
    alert('兩次密碼不相同，請再次輸入');
    return;
  }
  try {
    const res = await axios.post(url, {
      user: {
        email: emailTxt,
        nickname: nicknameTxt,
        password: passwordTxt,
      },
    });
    const token = res.headers.authorization;
    localStorage.setItem('authorization', token);
    const { message } = res.data;
    alert(message);
    setCurrentPage('Login');
  } catch (error) {
    console.log(error);
    const { message } = error.response.data;
    alert(`${message}，請確認信箱是否有誤`);
  }
};

function IsLogin() {
  const [todoTxt, setTodoTxt] = useState(``);

  return (
    <>
      <IsLoginHeader />

      {/* <!-- 新增待辦欄位 --> */}
      <div id="addTodo" className="container max-w-[500px] mt-10 mb-4">
        <label className="flex relative">
          <input
            id="innerText"
            name="createTodo"
            type="text"
            placeholder="新增待辦事項"
            onChange={(e) => setTodoTxt(e.target.value)}
            value={todoTxt}
            className="border-0 rounded-[10px] w-full py-3 pl-4 focus:ring-1 focus:ring-black/40 ul_shadow text-sm"
          />
          <button>
            <img
              type="button"
              className="absolute right-[4px] top-1/2 translate-y-[-50%] cursor-pointer md:hover:opacity-50 hover:duration-300 hover:ease-in-out"
              src={plus}
              alt="plus-btn"
            />
          </button>
        </label>
      </div>

      {/* <!-- 待辦清單 -->  */}
      <form id="todoList" className="container max-w-[500px]">
        <div className="ul_shadow rounded-[10px]">
          {/* <!-- 上方標籤欄 --> */}
          <ul className="flex justify-around bg-white rounded-t-[10px]">
            {/* <!-- 全部按鈕 --> */}
            <li
              id="allList"
              className="w-1/3 text-center border-b-2 active-border"
            >
              <button className="w-full py-4 cursor-pointer">全部</button>
            </li>
            {/* <!-- 待完成按鈕 --> */}
            <li
              id="hasToDoList"
              className="w-1/3 border-b-2 text-center border-[#EFEFEF]"
            >
              <button className="w-full py-4 cursor-pointer">待完成</button>
            </li>
            {/* <!-- 已完成按鈕 --> */}
            <li
              id="finishList"
              className="w-1/3 border-b-2 text-center border-[#EFEFEF]"
            >
              <button className="w-full py-4 cursor-pointer">已完成</button>
            </li>
          </ul>

          {/* <!-- 下方標籤欄 --> */}
          <ul id="todo_ul" className="bg-white px-4">
            {/* <!-- 載入中... --> */}
            <li className="py-4 border-b border-[#E5E5E5] flex items-center justify-center">
              {/* <!-- 內容文字 --> */}
              <p className="ml-4">載入中...</p>
            </li>
          </ul>

          {/* <!-- ul_footer --> */}
          <div className="container bg-white flex items-center justify-between py-[25px] rounded-b-[10px]">
            <p className="text-sm">0 個待完成項目</p>
            <button className="text-sm text-[#9F9A91]">清除已完成項目</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default IsLogin;
