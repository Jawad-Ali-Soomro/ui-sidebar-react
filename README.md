# Ui Sidebar React

[![npm][version]][npm-url]
[![License][license]][npm-url]
[![Download][download]][npm-url]

[version]: https://img.shields.io/npm/v/ui-sidebar-react.svg?style=flat-square
[license]: https://img.shields.io/github/license/your-username/ui-sidebar-react?style=flat-square
[download]: https://img.shields.io/npm/dt/ui-sidebar-react?style=flat-square
[npm-url]: https://www.npmjs.com/package/ui-sidebar-react

A lightweight, customizable React sidebar component with essential navigation features.

## Features

- 🎨 Customizable colors for all elements
- 🖥️ Logo support
- 🔘 Built-in logout functionality
- 🟠 Active item highlighting
- 🔳 Configurable border radius
- 📱 Responsive design

## Props
items | Array | [] | Navigation items array — each should include text, link, and icon.
isOpen | boolean | — | Controls sidebar visibility.
bgColor | string | "#111" | Sidebar background color.
textColor | string | "#fff" | Text color for items.
logo | string | — | Optional logo image URL to display at the top.
tileColor | string | "orange" | Background color for hovered/active tiles.
showLogout | boolean | — | Whether to show a logout button.
logoutFn | function | — | Function triggered on logout click.
radius | string | "10px" | Border radius of the sidebar container.


## Usage

```jsx
import Sidebar from "ui-sidebar-react";
import { FaHome, FaUser, FaSetting } from 'react-icons/fa'

const items = [
  {
    text: "Home",
    link: "/home",
    icon:  FaHome,
  },
  {
    text: "Profile",
    link: "/profile",
    icon: FaUser,
  },
  {
    text: "Settings",
    link: "/settings",
    icon: FaSettings,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Sidebar
      isOpen={isOpen} // Prop to show or hide Sidebar
      items={items} // Array of items
      logo="https://yourdomain.com/logo.png" // Replace with your logo
      bgColor="#111" // replace with your bgColor
      textColor="#fff" // replace with your text color
      tileColor="orange" // replace with your tile color
      showLogout={true} // show or hide logout button
      logoutFn={handleLogout} // handle logout functions
      radius="12px" // radius of tiles
    />
  );
}


## Installation


### npm
```bash
npm install ui-sidebar-react
