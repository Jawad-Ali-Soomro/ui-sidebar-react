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

## Install React Icons

First you should have to install react-icons cause this sidebar uses react icons

```bash
npm i react-icons
```
## Install Sidebar

```bash
npm i ui-sidebar-react
```

## Usage

```jsx
import './App.css'
import { GrBundle } from 'react-icons/gr'
import { useState } from 'react'
import Sidebar from './assets/Sidebar'
import { FaGithub, FaHome } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  const dataItems = [
    {
      text: "My Package",
      icon: MdDashboard,
      subLinks: [
        { text: "NPM", link: "https://www.npmjs.com/package/ui-sidebar-react", icon: FaHome },
        { text: "GitHub", link: "https://github.com", icon: FaGithub }
      ]
    },
    {
      text: "GitHub",
      icon: GrBundle,
      link: "https://github.com"
    },
   
  ];

  return (
    <>
      <Sidebar 
        isOpen={showSidebar} 
        tileColor='white' 
        bgColor='orange' 
        items={dataItems} 
        radius='10px'
        textColor='black'
        logo={'/vite.svg'} 
      />
    </>
  )
}

export default App
```
