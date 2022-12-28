import { useState, useEffect } from 'react';

function TabButton({ todo, setTodo,tabPos,setTabPos }) {
  // const [tab, setTab] = useState('all');

  return (
    <ul className="flex justify-around bg-white rounded-t-[10px]">
      {/*  全部按鈕 */}
      <li
        id="allList"
        className={`w-1/3 text-center ${tabPos === `all` && 'tab_active'}`}
      >
        <button
          type="button"
          className="w-full py-4 cursor-pointer"
          onClick={() => {
            setTabPos(`all`);
          }}
        >
          全部
        </button>
      </li>
      {/*  待完成按鈕  */}
      <li
        id="hasToDoList"
        className={`w-1/3 text-center ${tabPos === `unFinish` && 'tab_active'}`}
      >
        <button
          type="button"
          className="w-full py-4 cursor-pointer"
          onClick={() => {
            setTabPos(`unFinish`);
          }}
        >
          待完成
        </button>
      </li>
      {/*  已完成按鈕  */}
      <li
        id="finishList"
        className={`w-1/3 text-center ${tabPos === `finished` && 'tab_active'}`}
      >
        <button
          type="button"
          className=" w-full py-4 cursor-pointer"
          onClick={() => {
            setTabPos(`finished`);
          }}
        >
          已完成
        </button>
      </li>
    </ul>
  );
}
export default TabButton;
