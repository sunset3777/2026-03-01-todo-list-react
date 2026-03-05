function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="mb-4">

      {todos.map((todo) => (

        <li key={todo.id} className="group flex items-center mb-[17px]">

          <label className="flex flex-1 items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">

            <input
              className="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4"
              type="checkbox"
              checked={todo.checked}
              onChange={() => onToggle(todo.id)}
            />

            <span className="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">
              {todo.content}
            </span>
          </label>
          <a
            href="#"
            className="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100"

            onClick={(e) => {
              e.preventDefault();
              onDelete(todo.id);
            }}

            aria-label="刪除待辦"
          >
            <i className="fa-solid fa-times"></i>
          </a>

        </li>
      ))}
    </ul>
  );
}

export default TodoList;