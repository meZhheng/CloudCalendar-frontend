import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 rounded-full mb-4"
        src=""
        alt="User Avatar"
      />

      <h2 className="text-2xl font-bold mb-2">John Doe</h2>

      <p className="text-gray-600 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
      </p>

      <div className="text-left mb-4">
        <p className="text-gray-800">
          <span className="font-bold">Username:</span> johndoe
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Email:</span> johndoe@example.com
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Location:</span> New York, USA
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-lg font-bold mb-2">Groups</h3>
        <ul className="list-disc list-inside">
          <li>Group 1</li>
          <li>Group 2</li>
          <li>Group 3</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile();