import { useState } from 'react';
import axios from 'axios';
import plus from '../img/plus 1.svg';



function AddToDo({getData, headers,url }) {
  const [text,setText]=useState(``)
  const textObj = {
    content: text,
  };
  const postData = async () => {
    try {
      await axios.post(url,textObj,{ headers });
      getData()
      setText(``)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="addTodo" className="container max-w-[500px] mt-10 mb-4">
      <label className="flex relative">
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
          type="text"
          placeholder="新增待辦事項"
          className="border-0 rounded-[10px] w-full py-3 pl-4 focus:ring-1 focus:ring-black/40 ul_shadow text-sm"
        />
        <button
          type="button"
          onClick={postData}
        >
          <img
            type="button"
            className="absolute right-[4px] top-1/2 translate-y-[-50%] cursor-pointer md:hover:opacity-50 hover:duration-300 hover:ease-in-out"
            src={plus}
            alt="plus-btn"
          />
        </button>
      </label>
    </div>
  );
}

export default AddToDo;
