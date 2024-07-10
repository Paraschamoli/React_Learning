import { useEffect, useState } from "react";
import { Todoprovider } from "./context";
import TodoForm from './components/TodoForm'
import TodoItems  from './components/TodoItems'
function App() {
  const [todoArr, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevarr) => [...prevarr, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prearr) =>
      prearr.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevarr) => prevarr.filter((eachVal) => eachVal.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachVal) =>
        eachVal.id === id
          ? { ...eachVal, completed: !eachVal.completed }
          : eachVal
      )
    );
  };

  // localStorage functions
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <Todoprovider
      value={{ todoArr, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todoArr.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
