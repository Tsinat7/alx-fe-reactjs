import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md sm:p-4 md:p-8 mx-auto bg-white shadow-md rounded-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full mx-auto"
      />
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mt-4">
        Jane Doe
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-2">
        Front-End Developer | Loves creating interactive user interfaces
      </p>
    </div>
  );
};

export default UserProfile;