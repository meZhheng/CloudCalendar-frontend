import React, { useState, useEffect, useRef } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const UserProfile = () => {
  const [GroupSettings, setGroupSettings] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [InfoSettings, setInfoSettings] = useState(false);
  const [CreateSettings, setCreateSettings] = useState(false);
  const [JoinSettings, setJoinSettings] = useState(false);
  const [PhoneValue, setPhoneValue] = useState('123123');
  const [ApartmentValue, setApartmentValue] = useState('人事部');
  const [PositionValue, setPositionValue] = useState('人事部经理');
  const [AboutValue, setAboutValue] = useState('Write something about yourself');
  const [InputValue1,setInputValue1] = useState('');
  const [InputValue2,setInputValue2] = useState('');
  const [InputValue3,setInputValue3] = useState('');
  const [InputValue4,setInputValue4] = useState('');

  const ref = useRef(null) as React.MutableRefObject<any>;
  const ref1 = useRef(null) as React.MutableRefObject<any>;

  const CreateConfirm = () => {
    setCreateSettings(false);
  };

  const JoinConfirm = () => {
    setJoinSettings(false);
  };

  const SaveClick = () => {
    setAboutValue(InputValue4);
    setPositionValue(InputValue3);
    setApartmentValue(InputValue2);
    setPhoneValue(InputValue1);
    setInfoSettings(false);
  };

  const toggleGroup = () => {
    setGroupSettings(!GroupSettings);
  };

  const CreateGroup = () => {
    setCreateSettings(!CreateSettings);
  };

  const JoinGroup = () => {
    setJoinSettings(!JoinSettings);
  };

  const toggleSettings = () => {
    setOpenSettings(!openSettings);
  };

  const toggleSettings_Info = () => {
    setInfoSettings(!InfoSettings);
  };



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSettings(false);
      }
      if (ref1.current && !ref1.current.contains(event.target as Node)) {
        setGroupSettings(false);
      }
    };

    
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <body>
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className='relative'>
          <div className="absolute right-12 mt-4 rounded "ref={ref}>
            <button onClick={toggleSettings} className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20 relative" title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </button>
          {openSettings && (
            <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl">
              <div className="py-2 border-b">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Share Profile</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                  </svg>  
                  <span className="text-sm text-gray-700">Block User</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">More Info</span>
                </button>
              </div>
              <div className="py-2">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Report</span>
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
        <div className="w-full h-[250px]">
          <img src="/image/background.jpg"
               className="w-full h-full rounded-tl-lg rounded-tr-lg" alt=""/>
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img src="/image/photo.jpg"
               className="w-40 border-4 border-white rounded-full" alt=""/>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Amanda Ross</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                        d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
            </div>
            <p className="text-gray-700">CloudCalendar Invited User</p>
            <p className="text-sm text-gray-500">SJTU, Shanghai</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
              <span>Connect</span>
            </button>
            <button
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"></path>
              </svg>
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className='relative'>
            <div className="absolute right-12 mt-4 rounded ">
              <button onClick={toggleSettings_Info} className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20 relative" title="Settings">
              <svg className="h-4 w-4"  fill="black" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" width="40" height="40">
                <path 
                    d="M936.7 488.6l-399.9-0.6 0.5-399.8c0-13.3-10.7-24-24-24-13.2 0-24 10.7-24 24l-0.5 399.8-399.8-0.5c-13.2 0-24 10.7-24 24s10.7 24 24 24l399.8 0.5-0.5 399.9c0 13.3 10.7 24 24 24 13.2 0 24-10.7 24-24l0.5-399.9 399.9 0.5c13.2 0 24-10.7 24-24 0-13.2-10.7-23.9-24-23.9z" 
                    p-id="2558"></path>
              </svg>
              </button>
            {InfoSettings && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="bg-white p-4 w-1/2 h-4/5 overflow-y-auto">
                  <form>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                              About
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                value={InputValue4}
                                onChange={(event) => setInputValue4(event.target.value)}
                                className="block w-full rounded-md border-0  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Introduce Yourself"
                              />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                          </div>

                          <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                              Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                              <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                              <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                              Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label htmlFor="Apartment" className="block text-sm font-medium leading-6 text-gray-900">
                              Apartment
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="Apartment"
                                id="Apartment"
                                autoComplete="given-name"
                                value={InputValue2}
                                onChange={(event) => setInputValue2(event.target.value)}
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label htmlFor="Position" className="block text-sm font-medium leading-6 text-gray-900">
                              Position
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                name="Position"
                                id="Position"
                                value={InputValue3}
                                onChange={(event) => setInputValue3(event.target.value)}
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                              Location
                            </label>
                            <div className="mt-2">
                              <select
                                id="location"
                                name="location"
                                autoComplete="Location"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>Shanghai</option>
                                <option>Beijing</option>
                                <option>Jiangsu</option>
                                <option>Gangdong</option>
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                              Phone Number
                            </label>
                            <div className="mt-2">
                              <input
                                id="phone"
                                name="phone"
                                type="phone"
                                value={InputValue1}
                                onChange={(event) => setInputValue1(event.target.value)}
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          We'll always let you know about important changes, but you pick what else you want to hear about.
                        </p>

                        <div className="mt-10 space-y-10">
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                            <div className="mt-6 space-y-6">
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6">
                                  <label htmlFor="comments" className="font-medium text-gray-900">
                                    Comments
                                  </label>
                                  <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                </div>
                              </div>
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6">
                                  <label htmlFor="candidates" className="font-medium text-gray-900">
                                    Candidates
                                  </label>
                                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                </div>
                              </div>
                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6">
                                  <label htmlFor="offers" className="font-medium text-gray-900">
                                    Offers
                                  </label>
                                  <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                            <div className="mt-6 space-y-6">
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-everything"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                  Everything
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-email"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                  Same as email
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="push-nothing"
                                  name="push-notifications"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                  No push notifications
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button type="button" onClick={() => setInfoSettings(false)} className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={SaveClick}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
            <li className="flex border-b py-2">
                <span className="font-bold w-24">Full name:</span>
                <span className="text-gray-700">Amanda S. Ross</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Apartment:</span>
                {ApartmentValue&&<span className="text-gray-700">{ApartmentValue}</span>}
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Position:</span>
                {PositionValue&&<span className="text-gray-700">{PositionValue}</span>}
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Joined:</span>
                <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Mobile:</span>
                {PhoneValue&&<span className="text-gray-700">{PhoneValue}</span>}
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">amandaross@example.com</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Location:</span>
                <span className="text-gray-700">上海</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">About</h4>
            {AboutValue&&<p className="mt-2 text-gray-700">{AboutValue}</p>}
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
            <div className="relative px-4">
              <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">Profile informations changed.</p>
                  <p className="text-xs text-gray-500">3 min ago</p>
                </div>
              </div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
                  <p className="text-xs text-gray-500">15 min ago</p>
                </div>
              </div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
                  <p className="text-xs text-gray-500">57 min ago</p>
                </div>
              </div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className='relative'>
            <div className="absolute right-8 rounded" ref={ref1}>
                  <button onClick={toggleGroup} className="border border-gray-400 p-1 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20 relative" title="Group Settings">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                  </button>
                {GroupSettings&&(
                  <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl">
                    <div className="py-2 border-b">
                      <p className="text-gray-400 text-xs px-6 uppercase mb-1">Actions</p>
                      <button onClick={CreateGroup} className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 1674 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2458" width="40" height="40">
                          <path d="M1312.294461 1021.755245s1.905432-190.804211-29.547246-226.668095c-21.638398-32.131325-36.594734-61.287043-79.453901-86.449185-0.678647-22.029925-1.983737-55.30973-1.983737-55.30973s-26.023502-24.352986-42.937473-72.563024c-35.550661-14.277689-26.780454-23.465525-30.225893-41.8934 0 0-10.780046-74.781678 13.207514-73.241672 0 0 13.103107-6.525452 9.292244-23.674339-1.278989-28.607581-5.533583-77.522368-3.628151-96.602788 1.905432-19.054319-7.334608-60.765007 32.731666-68.412837 40.040172-7.621728 23.987561-3.810864 37.351686-5.716296 13.338024-1.905432 9.52716-9.52716 34.323877-9.52716l51.498865-8.274272c24.796717 0 40.692717 24.822819 54.030741 26.72825 13.338024 1.905432-10.127501-5.846805 17.201091-0.756952 40.066274 7.64783 34.506589 62.148403 36.412021 81.228824 1.905432 19.054319-1.174581 74.494558-4.985445 91.669547-3.836966 17.148887 17.070582 15.243455 17.070582 15.243455 22.082129-12.502766 11.745813 73.241671 11.745813 73.241671-4.411205 19.393643 15.347863 21.742805-11.27598 38.55237-16.940073 48.23614-62.070098 77.809487-62.070098 77.809487s-3.863067 36.803548-4.04578 45.469348c0.756952 3.445439-21.038057 59.955851 89.372588 76.243379 110.384543 16.261426 129.438862 52.020902 150.242002 71.936581 64.314853 37.325584 77.548469 170.966837 77.54847 170.966838H1312.294461zM1037.28582 455.267722c-22.082129 62.931457-94.227524 101.509928-94.227524 101.509928s-0.130509 48.027325-0.391527 59.35551c0.991869 4.489511-24.013663 82.298998 106.991308 99.473987 144.029772 21.246871 152.591165 67.890801 179.737044 93.888201 27.14588 25.971298 25.71028 212.677525 25.71028 212.677525l-834.265963 1.644414s0.391527-162.248834 21.821111-214.321939c5.142056-14.564808 28.45097-72.64133 172.480742-93.888201 144.055874-21.246871 114.508628-97.072621 119.233056-94.697356-0.86136-28.764192-3.654253-69.091484-3.654253-69.091484s-80.236955-31.765899-102.319085-94.697357c-46.382911-18.610589-44.346971-30.591318-48.836481-54.657184 0 0-9.996992-97.568555 21.325177-95.558716 0 0 33.723535 0 28.738089-22.395351-1.644414-37.325584 4.593918-109.653692 7.07359-134.554816 2.505773-24.875022 20.959751-92.061074 73.215569-102.031965 52.255818-9.944789 31.322169-4.985445 48.732075-7.465117 17.436007-2.479672 12.450562-12.450562 44.790701-12.450562l67.212153-28.16385c32.340139 0 53.091076 62.513828 70.500982 64.9935 17.436007 2.505773 21.586195-7.569524 57.267365-0.939665 52.255818 9.944789 44.999516 81.098315 47.479187 105.973338 2.479672 24.901124 5.246463 97.20313 0.261018 119.59848-4.985445 22.421452 10.571232 19.915679 10.571232 19.915679 37.325584 0 34.297775 95.584818 34.297775 95.584818-5.742398 25.292651-18.976014 28.346563-53.743621 50.298183zM526.838877 580.765211c-16.940073 48.210038-52.725651 72.563024-52.72565 72.563024s-0.522036 33.279804-1.174582 55.30973c-42.859167 25.162142-55.361933 54.317861-77.000331 86.449185-29.834366 84.021718-29.547246 227.503352-29.547246 227.503352H4.489511s-4.150187-125.784609 77.548469-171.802095c20.80314-19.915679 39.883561-55.675155 150.268104-71.936581 93.261757-17.122786 82.89934-72.79794 83.656293-76.243379-0.182713-8.6658 1.670516-45.469348 1.670515-45.469348s-45.156127-29.573348-62.070097-77.809487c-26.649945-16.809564-16.418037-28.137748-20.803141-47.505289 0 0-2.74069-64.288751 25.892993-64.288752 0 0 11.902424 1.905432 8.09156-15.243455-3.810864-17.174989-2.557977-72.615228-0.626443-91.669547 1.905432-19.080421-3.654253-73.580995 36.385919-81.228824 27.328592-5.089852 3.863067 2.662384 17.227193 0.756952 13.338024-1.905432 29.234024-26.728251 54.030741-26.72825l51.498866 8.274272c24.796717 0 16.078713 7.621728 29.416737 9.52716 13.364125 1.905432-2.688486-1.905432 37.351686 5.716296 40.066274 7.64783 30.826234 49.358517 32.731666 68.412837 1.905432 19.080421-0.704749 67.995208-1.983737 96.602788-3.810864 17.148887 15.791593 23.674339 15.791593 23.674339 24.013663-1.540007 13.233616 73.241671 13.233616 73.241672-3.47154 18.427876 8.561393 27.615712-26.963167 41.8934z" fill="" p-id="2459">
                          </path>
                        </svg>
                        <span className="text-sm text-gray-700">Set Groups</span>
                      </button>
                    {CreateSettings&&(
                      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                        <div className="bg-white p-4 w-1/2 h-7/9 overflow-y-auto">
                          <form>
                            <div className="space-y-12">        
                              <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Group Message</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">In this part, we need you to write some basic information about the group you create</p>
        
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">        
                                  <div className="sm:col-span-3">
                                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                      Group Type
                                    </label>
                                    <div className="mt-2">
                                      <select
                                        id="location"
                                        name="location"
                                        autoComplete="Location"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                      >
                                        <option>Work</option>
                                        <option>Travel</option>
                                        <option>Study</option>
                                      </select>
                                    </div>
                                  </div>
        
                                  <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Group Name
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="groupname"
                                        name="groupname"
                                        type="groupname"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
        
                                  <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                      About
                                    </label>
                                    <div className="mt-2">
                                      <textarea
                                        id="aboutgroup"
                                        name="aboutgroup"
                                        rows={3}
                                        className="block w-full rounded-md border-0  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        placeholder="Introduce Your Group"
                                      />
                                    </div>
                                      <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your group.</p>
                                  </div>
                                </div>
                              </div>
        
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                              <button type="button" onClick={() => setCreateSettings(false)} className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={CreateConfirm}
                              >
                                Create
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    </div>
                    <div className="py-2">
                      <button onClick={JoinGroup} className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3477" width="40" height="40">
                          <path d="M506.588245 127.312594c92.12621 0 168.899758 76.772524 168.899758 168.895665 0 92.12621-76.772524 168.898735-168.899758 168.898735-92.113931 0-168.887478-76.772524-168.887478-168.898735C337.700767 204.086142 414.474314 127.312594 506.588245 127.312594L506.588245 127.312594 506.588245 127.312594zM808.555671 836.146565c-189.366905 74.214259-386.404514 79.331813-598.807065 0-2.558265-174.013219 81.890079-281.495162 189.368952-322.428434l110.029976 181.680852 115.15981-176.565345C726.667639 562.331315 808.555671 667.2509 808.555671 836.146565L808.555671 836.146565zM808.555671 836.146565" fill="#272636" p-id="3478">
                          </path>
                        </svg> 
                        <span className="text-sm text-gray-700">Join Groups</span>
                      </button>
                    {JoinSettings&&(
                      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                        <div className="bg-white p-4 w-1/2 h-7/9 overflow-y-auto">
                          <form>
                            <div className="space-y-12">        
                              <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Input the Group Number</h2>                                      
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">               
                                  <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                      Group Number
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="groupnumber"
                                        name="groupnumber"
                                        type="groupnumber"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>        
                                </div>
                              </div>
        
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                              <button type="button" onClick={() => setJoinSettings(false)} className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={JoinConfirm}
                              >
                                Join
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                    )}
                    </div>
                  </div>
                )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-gray-900 font-bold">Connections (532)</h4>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">

            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
            <a href="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
               title="View Profile">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                   className="w-16 rounded-full" alt=""/>
                <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    </body>
  )
}
export default UserProfile
