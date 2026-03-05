function TodoNavbar() {
  return (
    <>
    <nav className ="flex justify-between pt-6 px-8 mb-4 sm:mb-0">
            <h1>
                <a className ="block w-[243px] h-[39px] bg-[url('https://upload.cc/i1/2022/03/23/8vTzYG.png')] bg-no-repeat overflow-hidden whitespace-nowrap indent-[101%]" href="#">ONLINE TODO LIST</a>
                </h1>
            <ul className ="flex text-base">
                <li className =" hidden sm:block">
                    <a className ="no-underline text-[#333333] ml-0 sm:ml-6 hover:text-[#d87355]" href="#">
                        <span className ="font-bold">王小明的代辦</span>
                        </a>
                        </li>
                <li>
                    <a className ="no-underline text-[#333333] ml-0 sm:ml-6 hover:text-[#d87355]" href="#loginPage">登出</a>
                    </li>
            </ul>
        </nav>
    </>
  );
}

export default TodoNavbar;