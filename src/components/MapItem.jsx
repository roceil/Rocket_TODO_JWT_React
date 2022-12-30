import { useRef } from 'react';
import close from '../img/close.svg';
import axios from 'axios';
import Swal from 'sweetalert2';
// import check from "./check.svg"

function MapItem({ content, id, getData, url, headers, completed_at }) {
  const isCheck = useRef(completed_at !== null ? true : false);
  const deleteItemConfirm = (id) => {
    Swal.fire({
      title: '是否刪除待辦',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確認刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('刪除成功!');
        deleteData(id);
      }
    });
  };
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
      <div className="flex ">
        {/* checkbox */}
        <input

          id="checkbox"
          defaultChecked={isCheck.current}
          type="checkbox"
          className={`appearance-none w-5  checkbox-after flex items-center`}
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
          deleteItemConfirm(id);
        }}
      >
        <img src={close} alt="deleteBtn" />
      </button>
    </li>
  );
}

export default MapItem;
