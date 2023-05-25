import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {AppContext} from "./AppContext";
import {useNavigate} from "react-router-dom";

export default function Captcha() {
  const [open, setOpen] = useState(true)
  const [captcha, setCaptcha] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const {setValid} = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/captcha.php')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        const blob = new Blob([arrayBuffer], {type:'image/png'});
        const imageURL = URL.createObjectURL(blob);
        setCaptchaImage(imageURL);
      })
      .catch(error => {
        console.error('Error fetching captcha:', error);
      });
  }, []);
  const handleSubmit = e => {
    e.preventDefault();

    fetch('./captcha.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({captcha: captcha})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        if (data.valid) {
          setValid(true);
          alert('验证码正确！');
          navigate('/')
        } else {
          alert('验证码错误，请重新输入！');
        }
      })
      .catch(error => {
        console.error('Error verifying captcha:', error);
        navigate('/')
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        需要进行人机验证
                      </Dialog.Title>
                      <div className="h-50px mt-2 sm:flex items-center">
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            value={captcha}
                            onChange={e => setCaptcha(e.target.value)}
                            required
                            className="h-40px mr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 font-mono"
                          />
                        </form>
                        <img src={captchaImage} alt="captcha" className="h-40px ml-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 py-3 sm:flex sm:p-6 sm:pb-4 sm:pt-0">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 sm:w-auto sm:ml-14"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}