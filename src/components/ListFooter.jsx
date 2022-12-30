import axios from 'axios';
import Swal from 'sweetalert2';

function ListFooter({ getData, url, headers, totalTodo }) {
  const unFinishItems = totalTodo.filter((item) => {
    return item.completed_at === null;
  });

  const finishItems = totalTodo
    .map((item) => {
      if (item.completed_at !== null) {
        return item.id;
      }
    })
    .filter((item) => item !== undefined);

  const checkFinishedItem = () => {
    Swal.fire({
      icon: 'error',
      title: '無可刪除項目',
      showConfirmButton: false,
      timer: 1200,
    });
  };

  const deleteAllItemConfirm = (finishItems) => {
    Swal.fire({
      title: '是否刪除所有已完成項目',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確認刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        if (finishItems.length === 0) {
          checkFinishedItem();
          return;
        }
        Swal.fire('刪除成功!');
        deleteAll();
      }
    });
  };
  const deleteAll = async () => {
    try {
      for (let i = 0; i < finishItems.length; i++) {
        const res = await axios.delete(`${url}/${finishItems[i]}`, { headers });
        console.log(res.data);
      }
      getData();
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
          className="text-sm text-[#9F9A91] md:hover:text-black"
          onClick={() => {
            deleteAllItemConfirm(finishItems);
          }}
        >
          清除已完成項目
        </button>
      </div>
    </>
  );
}
export default ListFooter;
