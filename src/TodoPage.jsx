import { useMemo, useState } from "react";
import TodoNav from "./TodoNav";
import TodoInput from "./TodoInput";
import TodoTab from "./TodoTab";
import TodoList from "./TodoList"; 

function TodoPage() {

  //  todos state：存所有待辦事項
  const [todos, setTodos] = useState([]);

  // status state：控制目前 tab（all / pending / completed）
  const [status, setStatus] = useState("all");


  //  新增 todo（給 TodoInput 使用）
  const handleAdd = (text) => {
    const content = text.trim();
    if (!content) return;

    const newTodo = {
      id: Date.now(),
      content,
      checked: false,
    };

    // 新 todo 放在最前面
    setTodos((prev) => [newTodo, ...prev]);
  };


  // 切換完成狀態（checkbox）
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, checked: !todo.checked }
          : todo
      )
    );
  };


  //  刪除 todo
  const handleDelete = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };


  // 依 Tab 篩選 todos
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (status === "all") return true;
      if (status === "pending") return !todo.checked;
      if (status === "completed") return todo.checked;
      return true;
    });
  }, [todos, status]);


  // 已完成數量
  const completedCount = todos.filter((t) => t.checked).length;

  // 待辦事項編輯
  const handleEdit = (id, nextContent) => {
  const content = nextContent.trim();
  if (!content) return;
  setTodos((prev) =>
    prev.map((todo) => (todo.id === id ? { ...todo, content } : todo))
  );
};



  return (
    <>
      <div id="todoListPage" className="bg-half-yellow min-h-screen">

        <TodoNav />

        <div className="h-screen mx-auto px-8 py-4">
          <div className="w-full sm:w-[500px] mx-auto">

            {/* TodoInput：新增待辦 */}
            <TodoInput onAdd={handleAdd} />

            <div className="bg-white rounded-lg shadow-md">

              {/* TodoTab：切換顯示狀態 */}
              <TodoTab
                currentStatus={status}
                onChangeStatus={setStatus}
              />

              <div className="pt-[23px] pb-[32px] pl-[24px] pr-[17px]">

                {/* TodoList：顯示 todo */}
                <TodoList
                  todos={filteredTodos}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />

                {/* 底部資訊 */}
                <div className="flex justify-between">
                  <p className="text-[#333333] text-sm">
                    {completedCount} 個已完成項目
                  </p>

                  <a
                    className="text-[#9F9A91] text-sm no-underline"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();

                      // 清除已完成
                      setTodos((prev) =>
                        prev.filter((todo) => !todo.checked)
                      );
                    }}
                  >
                    清除已完成項目
                  </a>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPage;