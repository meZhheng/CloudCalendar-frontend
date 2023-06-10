import React, { useState } from 'react';

function UserProfile() {
  const [openSettings, setOpenSettings] = useState(false);

  const toggleSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div
          className="absolute right-12 mt-4 rounded"
          onClick={toggleSettings}
        >
          <button
            className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </button>
          {openSettings && (
            <div
              className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
              onClick={() => setOpenSettings(false)}
            >
              <div className="py-2 border-b">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Settings
                </p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">Share Profile</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4v16c0 .552.448 1 1 1h16c.552 0 1-.448 1-1V4c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4h18M12 12v.01M12 12a2 2 0 100-4 2 2 0 000 4z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">
                    Delete Profile
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src="background.jpg"
          alt="Background"
        />
        <div className="flex justify-center -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-4 border-white"
            src="profile.jpg"
            alt="Profile"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-600">Web Developer</p>
          <p className="text-gray-600">New York City, USA</p>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Connect
          </button>
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:text-white hover:bg-blue-500">
            Message
          </button>
        </div>
        <div className="mt-8 px-8">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Full Name:</span> John Doe
            </li>
            <li>
              <span className="font-semibold">Birthday:</span> January 1, 1990
            </li>
            <li>
              <span className="font-semibold">Joined:</span> January 1, 2020
            </li>
            <li>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:johndoe@example.com">johndoe@example.com</a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">John Doe</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
