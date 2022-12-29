import { React, useState, useEffect } from 'react';
import IsLoginHeader from '../components/IsLoginHeader';
import axios from 'axios';
import '../main.css';

import List from '../container/List';

const url = 'https://todoo.5xcamp.us/todos';

const headers = {
  Authorization: localStorage.getItem('authorization'),
};

function IsLogin({ setCurrentPage }) {
  const [tabPos, setTabPos] = useState(`all`);
  const [totalTodo, setTotalTodo] = useState([]);
  const [todo, setTodo] = useState([]);
  const getData = async () => {
    const res = await axios.get(url, { headers });
    const { todos } = await res.data;
    setTotalTodo(todos);
    setTodo(todos);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    switch (tabPos) {
      default: {
        setTodo(totalTodo);
        break;
      }
      case 'unFinish': {
        const filterData = totalTodo.filter((item) => {
          return item.completed_at === null;
        });
        setTodo(filterData);
        break;
      }
      case 'finished': {
        const filterData = totalTodo.filter((item) => {
          return item.completed_at !== null;
        });
        setTodo(filterData);
        break;
      }
    }
  }, [tabPos]);

  return (
    <>
    <h1>123</h1>
      <IsLoginHeader setCurrentPage={setCurrentPage} />
      <List
        todo={todo}
        setTodo={setTodo}
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

export default IsLogin;