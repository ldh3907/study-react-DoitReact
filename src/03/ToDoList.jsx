import ToDoTask from "./ToDoTask";

const ToDos = () => {
  const todoList = [
    { taskName: "빨래하기", finished: false },
    { taskName: "공부하기", finished: true },
  ];
  return (
    <div>
      {todoList.map((todo) => (
        <ToDoTask taskName={todo.taskName} finished={todo.finished} />
      ))}
    </div>
  );
};

export default ToDos;
