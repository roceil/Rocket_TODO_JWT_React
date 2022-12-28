import { React, useState, useEffect } from 'react';
import axios from 'axios';
import '../main.css';

import List from '../container/List';

const url = 'https://todoo.5xcamp.us/todos';
const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNDg0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjcyMTkzNDkxLCJleHAiOjE2NzM0ODk0OTEsImp0aSI6ImFhZDk3YmIzLTRhNWQtNDEyYS05MDRkLWFkMzBkODVkNTM0YyJ9.B2U_CJVmBb56DvbcGn6tyC8kboQPBRBVkrdYX5xk2R0',
};

function IsLogin() {
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
      default:{
        setTodo(totalTodo);
        break
      }
      case 'unFinish': {
        const filterData = totalTodo.filter((item) => {
          return item.completed_at === null;
        });
        setTodo(filterData);
        break
      }
      case 'finished': {
        const filterData = totalTodo.filter((item) => {
          return item.completed_at !== null;
        });
        setTodo(filterData);
        break
      }

    }
  }, [tabPos]);

  return (
    <>
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
