import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div
      className="relative bg-[#1A1A1A] backdrop-blur-xl rounded-xl p-6 flex items-center w-[90%] max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[180px] transition-all duration-300"
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="relative flex-shrink-0">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-20 h-20 md:w-32 md:h-32 rounded-lg transition-all duration-300"
          style={{
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0)", 
            transition: "box-shadow 0.3s ease-in-out", 
          }}
          onMouseEnter={(e) => (e.target.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.5)")} 
          onMouseLeave={(e) => (e.target.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0)")}  
        />
      </div>

      <div className="ml-4 md:ml-6 text-white font-['Poppins'] flex flex-col justify-start">
        <h2 className="text-lg md:text-2xl font-bold text-gray-100">{user.name.first} {user.name.last}</h2>
        <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
          {user.gender}
        </p>
        <p className="text-md md:text-lg font-medium text-gray-200 mt-1">{user.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
