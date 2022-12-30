import AddToDo from '../components/AddToDo';
import ListItem from '../components/ListItem';


function List({ todo, setTodo, getData, url, headers, tabPos, setTabPos,totalTodo}) {
  return (
    <>

      <AddToDo getData={getData} url={url} headers={headers} />
      <ListItem 
        setTodo={setTodo}
        todo={todo}
        getData={getData}
        url={url}
        headers={headers}
        tabPos={tabPos}
        setTabPos={setTabPos}
        totalTodo={totalTodo}
      />
    </>
  );
}

export default List;
