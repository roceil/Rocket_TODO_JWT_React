import React from 'react';
import axios from 'axios';
import logo from '../img/logo_lg.svg';
import '../main.css';

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
    alert('兩次密碼不相同，請再次輸入')
    return
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
    const { message } = res.data
    alert(message)
    setCurrentPage('Login')
  } catch (error) {
    console.log(error);
    const { message } = error.response.data
    alert(`${message}，請確認信箱是否有誤`)
  }
};

function SignUp(props) {
  const { setCurrentPage } = props;

  return (
    <>
      {/* header */}
      <header className="mt-12 mb-8">
        <div className="flex flex-col justify-center items-center">
          <a className="mb-[21.59px]" href=".">
            <img src={logo} alt="logo" />
          </a>
          <p className="text-xl font-bold">註冊帳號</p>
        </div>
      </header>

      {/* form */}
      <main>
        <form className="container">
          {/* email */}
          <label htmlFor="emailTxt" className="flex flex-col mb-4">
            <span className="block mb-1 text-sm font-bold">Email</span>
            <input
              id="emailTxt"
              className="min-w-[304px] py-3 pl-4 rounded-[10px] peer"
              type="email"
              placeholder="請輸入Email"
            />
            <span className="peer-invalid:invisible visible mt-[3px] text-sm text-[#D87355] font-bold">
              此欄位不可為空
            </span>
          </label>

          {/* 您的暱稱 */}
          <label htmlFor="nicknameTxt" className="flex flex-col mb-[27px]">
            <span className="block mb-1 text-sm font-bold">您的暱稱</span>
            <input
              id="nicknameTxt"
              className="min-w-[304px] py-3 pl-4 rounded-[10px]"
              type="text"
              placeholder="請輸入暱稱"
            />
          </label>

          {/* Password */}
          <label htmlFor="passwordTxt" className="flex flex-col mb-[27px]">
            <span className="block mb-1 text-sm font-bold">Password</span>
            <input
              id="passwordTxt"
              className="min-w-[304px] py-3 pl-4 rounded-[10px]"
              type="password"
              placeholder="請輸入密碼"
            />
          </label>

          {/* Password again */}
          <label htmlFor="checkPasswordTxt" className="flex flex-col mb-[27px]">
            <span className="block mb-1 text-sm font-bold">Check Password</span>
            <input
              id="checkPasswordTxt"
              className="min-w-[304px] py-3 pl-4 rounded-[10px]"
              type="password"
              placeholder="請再次輸入密碼"
            />
          </label>

          {/* 註冊按鈕 */}
          <div className="flex justify-center mb-2">
            <input
              className=" py-3 px-12 bg-[#333333] text-white font-bold rounded-[10px] cursor-pointer"
              type="button"
              value="註冊帳號"
              onClick={(e) => {
                SignUpApi(
                  emailTxt.value,
                  nicknameTxt.value,
                  passwordTxt.value,
                  checkPasswordTxt.value,
                  setCurrentPage
                );
              }}
            />
          </div>

          {/* 登入按鈕 */}
          <div className="flex justify-center">
            <input
              className="w-[160px] py-3 font-bold md:hover:bg-[#333333] md:hover:text-white rounded-[10px] cursor-pointer"
              type="button"
              value="登入"
              onClick={() => setCurrentPage('Login')}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default SignUp;
