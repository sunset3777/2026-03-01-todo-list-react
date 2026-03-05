import { useState } from "react";

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = () => {
    onAdd?.(value);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

  return (
    <>
    <div className="w-full flex relative mb-8 shadow-md">
      <input
        className="w-full h-[47px] rounded-[10px] pl-4"
        type="text"
        placeholder="請輸入待辦事項"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
        className="absolute top-1 right-1 w-10 h-[39px] bg-[#333333] text-white rounded-[10px] flex items-center justify-center"
        onClick={submit}
        aria-label="新增待辦"
      >
        <i className="fa-solid fa-plus" />
      </button>
    </div>
    </>
  );
}

export default TodoInput;