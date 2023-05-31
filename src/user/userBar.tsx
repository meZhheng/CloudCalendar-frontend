import React from "react";
const UserBar = () => {
  return (
    <div className="flex mt-auto mb-3">
      <div className="flex p-3 pl-7 pr-7 w-full items-center rounded-full">
        <div className="cursor-pointer transition duration-200 hover:bg-blue-500 hover:shadow-lg z-10">
          <div className="items-stretch box-border felx flex-col relative">
            <div className="h-10 w-10 overflow-visible block box-border relative">
              <img className="inset-0 h-full w-full absolute pointer-events-none select-none overflow-clip overflow-clip-content rounded-full"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt="test"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch flex-shrink-1 outline-none max-w-full box-border relative">
            <div className="flex flex-shrink-1 flex-col flex-grow outline-none max-w-full ml-3 mr-3">
              <div className="flex flex-col items-stretch flex-shrink-1 outline-none max-w-full box-border relative">
                <div className="flex flex-row items-center max-w-full box-border relative">
                  <div className="whitespace-nowrap text-black font-bold text-15 leading-5 break-words min-w-0 overflow-hidden flex box-border">
                  <span className="break-words min-w-0 max-w-full overflow-x-hidden overflow-y-hidden whitespace-nowrap inline box-border truncate">
                    <span className="break-words min-w-0 box-border inline pointer-events-none select-none">test</span>
                  </span>
                  </div>
                  <div className="flex-shrink-0 text-black flex-row font-normal leading-5 break-words min-w-0 inline-flex box-border">
                    <span className="break-words min-w-0 box-border inline-flex items-center"></span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-1 flex-row items-center box-border flex relative">
                <div className="flex-shrink-1 outline-none max-w-full items-stretch box-border flex flex-col relative">
                  <div className="items-stretch box-border flex flex-col relative">
                    <div className="text-15 text-blue-gray-700 font-normal leading-5 break-words min-w-0 max-w-full overflow-y-hidden overflow-x-hidden whitespace-nowrap truncate box-border inline">
                      <span className="break-words min-w-0 box-border inline pointer-events-none select-none">@test</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 items-end flex-grow box-border relative">
            <svg viewBox="0 0 24 24" aria-hidden="true"
                 className="text-black pointer-events-none select-none max-w-full h-5 inline-block fill-current relative overflow-hidden overflow-clip-content items-baseline">
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserBar();