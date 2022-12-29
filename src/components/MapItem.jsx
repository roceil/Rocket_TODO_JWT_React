import { useRef, useEffect } from 'react';
import close from '../img/close.svg';
import axios from 'axios';
function MapItem({ content, id, getData, url, headers, completed_at }) {
  const isCheck = useRef(completed_at !== null ? true : false);
  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`${url}/${id}`, { headers });
      getData();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const completedToggle = async (id) => {
    try {
      const res = await axios.patch(`${url}/${id}/toggle`, {}, { headers });
      getData();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="py-4 border-b border-[#E5E5E5] flex items-center justify-between">
      {/* 左邊區塊 */}
      <div className="flex">
        {/* checkbox */}
        <input
          id="checkbox"
          defaultChecked={isCheck.current}
          type="checkbox"
          className="w-5"
          onClick={() => {
            completedToggle(id);
          }}
        />
        {/* <!-- 內容文字 --> */}
        <p className={`ml-4 ${completed_at !== null ? 'complete_todo' : ''}`}>
          {content}
        </p>
      </div>

      {/* 右邊刪除鈕 */}
      <button
        type="button"
        className="hover:opacity-50"
        onClick={() => {
          deleteData(id);
        }}
      >
        <img src={close} alt="deleteBtn" />
      </button>
    </li>
  );
}

export default MapItem;
