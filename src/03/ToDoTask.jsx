const ToDoTask = ({ taskName, finished }) => {
  return (
    <div>
      <div>{taskName}</div>
      <div>{finished ? "완료" : "미완료"}</div>
    </div>
  );
};

export default ToDoTask;
