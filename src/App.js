import React, { useState } from 'react';
import TodoList from './components/todoList';

function App() {
  const [item, setItem] = useState({
    id: '',
    todo: ''
  });

  const [items, setItems] = useState([]);

  const inputValue = (e) => {
    let todoVal = e.target.value;
    setItem({
      id: Date.now(),
      todo: todoVal
    });
  }

  const listofitems = (e) => {
    e.preventDefault();
    setItems((oldData) => {
      let newArr = [...oldData];
      newArr.push(item);
      return newArr;
    });
    setItem({ id: '', todo: '' });
    e.target[0].value = '';
  }

  const delItem = (id) => {
    setItems(oldData => {
      return oldData.filter((item) => {
        return item.id !== id;
      })
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <form onSubmit={listofitems}>
            <input type="text" placeholder="Add a Items" onChange={inputValue} required />
            <button type="submit"> + </button>
          </form>
          <ol>
            {
              items.map((item, index) => {
                return <TodoList key={item.id} item={item} delItem={delItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;