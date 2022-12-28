import TabButton from './TabButton';
import ListFooter from './ListFooter';
import MapItem from './MapItem';
function ListItem({ todo, getData, url, headers, setTodo, tabPos, setTabPos,totalTodo }) {
  return (
    <>
      <form id="todoList" className="container max-w-[500px]">
        <div className="ul_shadow rounded-[10px]">
          {/* 分頁欄位 */}
          <TabButton
            todo={todo}
            setTodo={setTodo}
            tabPos={tabPos}
            setTabPos={setTabPos}
          />

          {/* 下方標籤欄 */}
          <ul className="bg-white px-4">
            {todo.map((item) => {
              const { id, content, completed_at } = item;
              return (
                <MapItem
                  key={id}
                  id={id}
                  content={content}
                  completed_at={completed_at}
                  getData={getData}
                  url={url}
                  headers={headers}
                />
              );
            })}
          </ul>

          {/* ul_footer */}
          <ListFooter
            todo={todo}
            getData={getData}
            url={url}
            headers={headers}
            totalTodo={totalTodo}
          />
        </div>
      </form>
    </>
  );
}

export default ListItem;
