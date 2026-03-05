import TodoNavbar from "../components/todo/TodoNavbar";

function TodoPage () {

    return(
    <>
    <div id="todoListPage" className ="bg-half-yellow min-h-screen">
        <TodoNavbar />
        <div className ="h-screen mx-auto px-8 py-4">
            <div className ="w-full sm:w-[500px] mx-auto">
                <div className ="w-full flex relative mb-8 shadow-md">
                    <input className ="w-full h-[47px] rounded-[10px] pl-4" type ="text" placeholder="請輸入待辦事項"/>
                    <a className="absolute top-1 right-1 w-10 h-[39px] bg-[#333333] text-white rounded-[10px] flex items-center justify-center" href="#">
                        <i className ="fa-solid fa-plus"></i>
                    </a>
                </div>
                <div className ="bg-white rounded-lg shadow-md">
                    <ul className ="flex">
                        <li className = "flex-1"><a href="#" className ="block text-center font-bold p-4 border-b-2 border-[#333333] text-[#333333]">全部</a></li>
                        <li className = "flex-1"><a href="#" className ="block text-center font-bold p-4 border-b-2 border-[#efefef] text-[#9F9A91]">待完成</a></li>
                        <li className = "flex-1"><a href="#" className ="block text-center font-bold p-4 border-b-2 border-[#efefef] text-[#9F9A91]">已完成</a></li>
                    </ul>
                    <div className ="pt-[23px] pb-[32px] pl-[24px] pr-[17px]">
                        <ul className ="mb-4">
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="flex flex-1 items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">打電話叫媽媽匯款給我</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">整理電腦資料夾</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">繳電費水費瓦斯費</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">約vicky禮拜三泡溫泉</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                            <li className ="group flex items-center mb-[17px]">
                                <label className ="w-full flex items-center border-b border-[#e5e5e5] pb-[15px] text-[#333333] leading-[20.27px]">
                                    <input className ="peer w-[20px] h-[20px] border border-[#9F9A91] rounded-[5px] mr-4" type ="checkbox" defaultChecked/>
                                    <span className ="transition-all duration-300 peer-checked:text-[#9F9A91] peer-checked:line-through">約ada禮拜四吃晚餐</span>
                                </label>
                                <a className ="ml-[17px] text-sm text-[#333333] opacity-0 group-hover:opacity-100" href="#">
                                    <i className ="fa-solid fa-times"></i>
                                </a>
                            </li>
                        </ul>
                        <div className ="flex justify-between ">
                            <p className = "text-[#333333] text-sm " > 5 個已完成項目</p>
                            <a className = "text-[#9F9A91] text-sm no-underline" href="#">清除已完成項目</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
};

export default TodoPage