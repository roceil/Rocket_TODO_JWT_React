import { React, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import IsLogin from './IsLogin';
import logo from '../img/logo_lg.svg';
import '../main.css';
import left from '../img/left.svg';
const url = 'https://todoo.5xcamp.us/users/sign_in';

const LoginApi = async (emailTxt, passwordTxt, setCurrentPage) => {
  try {
    const res = await axios.post(url, {
      user: {
        email: emailTxt,
        password: passwordTxt,
      },
    });
    const { nickname } = res.data;
    const { authorization } = res.headers;
    localStorage.setItem('authorization', authorization);
    localStorage.setItem('userName', nickname);
    const { message } = res.data;
    alert(message);
    setCurrentPage('IsLogin');
  } catch (error) {
    console.log(error);
    const { message } = error.response.data;
    alert(`${message}，請重新輸入帳號密碼`);
  }
};
function Login(props) {
  // eslint-disable-next-line react/prop-types
  const { setCurrentPage } = props;
  return (
    <>
      <div className="flex w-full h-full justify-center items-center container">
        <img className="hidden md:block md:mr-[70px]" src={left} alt="" />
        <div className="w-full mt-12 mb-8 md:max-w-[304px]">
          <div className="flex flex-col justify-center items-center ">
            <a className="mb-[21.59px] md:hidden" href=".">
              <img src={logo} alt="logo" />
            </a>
            <p className="text-xl font-bold text-center mb-8">
              最實用的線上待辦事項服務
            </p>
          </div>
          {/* form */}
          <main>
            <form
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (emailTxt.value === `` || passwordTxt.value === ``) {
                    alert('請確認帳號密碼有無輸入');
                    return;
                  }
                  LoginApi(emailTxt.value, passwordTxt.value, setCurrentPage);
                }
                // e.key === 'Enter' && LoginApi();
              }}
            >
              {/* email */}
              <label htmlFor="emailTxt" className=" flex flex-col mb-4">
                <span className="block mb-1 text-sm font-bold">Email</span>
                <input
                  id="emailTxt"
                  className=" py-3 pl-4 rounded-[10px] peer"
                  type="email"
                  placeholder="請輸入Email"
                />
                <p className="visible peer-invalid:invisible  mt-[3px] text-sm text-[#D87355] font-bold">
                  此欄位不可為空
                </p>
              </label>

              {/* Password */}
              <label htmlFor="passwordTxt" className="flex flex-col mb-[27px]">
                <span className="block mb-1 text-sm font-bold">Password</span>
                <input
                  id="passwordTxt"
                  className=" py-3 pl-4 rounded-[10px]"
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
                  onClick={(e) => {
                    if (emailTxt.value === `` || passwordTxt.value === ``) {
                      let timerInterval;

                      Swal.fire({
                        title: '請確認帳號密碼有無輸入',
                        html: '將在 <b></b> 秒後關閉.',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                          Swal.showLoading();
                          const b = Swal.getHtmlContainer().querySelector('b');
                          timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft();
                          }, 100);
                        },
                        willClose: () => {
                          clearInterval(timerInterval);
                        },
                      }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                          console.log('I was closed by the timer');
                        }
                      });
                      return;
                    }
                    LoginApi(emailTxt.value, passwordTxt.value, setCurrentPage);
                  }}
                />
              </div>

              {/* 註冊按鈕 */}
              <div className="flex justify-center mb-2">
                <input
                  to="Rocket_TODO_JWT_React/SignUp"
                  type="button"
                  className="w-[128px] py-3 font-bold md:hover:bg-[#333333] md:hover:text-white rounded-[10px] cursor-pointer text-center"
                  value="註冊帳號"
                  onClick={() => setCurrentPage('SignUp')}
                />
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default Login;
