import axios from 'axios';

function ListFooter({ todo, getData, url, headers,totalTodo }) {
  const unFinishItems = totalTodo.filter((item) => {
    return item.completed_at === null;
  });

  const finishItems = todo
    .map((item) => {
      if (item.completed_at !== null) {
        return item.id;
      }
    })
    .filter((item) => item !== undefined);

  const deleteAll = async () => {
    if (finishItems.length === 0) {
      alert('無可刪除資料')
      return
    }
    try {
      for (let i = 0; i < finishItems.length; i++) {
        const res = await axios.delete(`${url}/${finishItems[i]}`, { headers });
        console.log(res.data);
      }
      getData();
      alert('刪除成功');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container bg-white flex items-center justify-between py-[25px] rounded-b-[10px]">
        <p className="text-sm">{unFinishItems.length} 個待完成項目</p>
        <button
          type="button"
          className="text-sm text-[#9F9A91]"
          onClick={deleteAll}
        >
          清除已完成項目
        </button>
      </div>
    </>
  );
}
export default ListFooter;
