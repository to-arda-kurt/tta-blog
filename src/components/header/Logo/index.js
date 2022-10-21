import React from "react";

export const Logo = () => {
  const imgUrl = `https://images.pexels.com/photos/5641225/pexels-photo-5641225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;
  return (
    <div>
      <a href="/">
        <img
          src={`${imgUrl}`}
          alt="Arda Kurt Profile"
          className="rounded-full h-16"
        />
      </a>
    </div>
  );
};
