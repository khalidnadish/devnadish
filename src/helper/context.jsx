import React, { useState, createContext } from "react";
export const ProfileDetail = createContext();
ProfileDetail.displayName = "ProfileContext>>>";

export const ProfileProvider = (props) => {
  const [blueSize, setBlueSize] = useState(10);
  const [redSize, setResSize] = useState(10);
  const [orangeSize, setorangeSize] = useState(10);
  const [greenSize, setgreenSize] = useState(10);
  const [activeColor, setActiveColor] = useState("primary.main");
  const [activeLink, setActiveLink] = useState("/aboutme");
  const [activeLang, setActiveLang] = useState(false);

  return (
    <ProfileDetail.Provider
      value={{
        blueSize: blueSize,
        setBlueSize: setBlueSize,
        redSize: redSize,
        setResSize: setResSize,
        orangeSize: orangeSize,
        setorangeSize: setorangeSize,
        greenSize: greenSize,
        setgreenSize: setgreenSize,
        activeColor: activeColor,
        setActiveColor: setActiveColor,
        activeLink: activeLink,
        setActiveLink: setActiveLink,
        activeLang:activeLang,
        setActiveLang:setActiveLang
      }}
    >
      {props.children}
    </ProfileDetail.Provider>
  );
};
