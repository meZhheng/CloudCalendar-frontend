import React from "react";
const UserBar = () => {
  return (
    <div className="flex mt-auto">
      <div className="flex m-3 ml-7 mr-7 w-full items-center rounded-full">
        <div className="bg-white">
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt=""
          />
        </div>
        <div className="flex flex-1 items-stretch flex-shrink-1 outline-none max-w-full box-border relative">
          <div className={"flex flex-shrink-1 flex-col flex-grow outline-none max-w-full ml-3 mr-3"}>
            <p>test</p>
            <p>@test</p>
          </div>
        </div>
        <div className="flex flex-1 items-end flex-grow border-0 box-border relative">
          <svg viewBox="0 0 24 24" aria-hidden="true"
               className="text-red-500 h-5">
            <g>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default UserBar();