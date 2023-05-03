import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Feed",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    protected: false,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    protected: false,
  },

  {
    title: "Videos",
    path: "/videos",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    protected: true,
  },
  {
    title: "Photos",
    path: "/photos",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    protected: false,
  },
];
