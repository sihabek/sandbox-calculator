# sandbox-calculator

Simple calculator web application built with [React](https://react.dev).

Tis is **sandbox** project, used for experimenting with technologies and tools.
This code **is not** writen with goal to be used in production.

## Overview

```
 +-----------+
 |           |      +-------------------+          +--------------+
 |           | ---> |  useCalculator()  | -------> |              |      +-----------+
 |           |      +-------------------+          |              | ---> |   Entry   |
 |           |                                     |              |      +-----------+
 |           |      +-------------------+          |  Calculator  |
 |  <App />  | ---> |    <Display />    |          |              |      +-----------+
 |           |      +-------------------+          |              | ---> |  Compute  |
 |           |                                     |              |      +-----------+
 |           |      +-------------------+          +--------------+
 |           | ---> |    <Keypad />     |
 |           |      +-------------------+
 +-----------+
```

A simple calculator takes a series of keypunches and updates displayed value
with each punch:

```
 +----------------+                   +----------------+
 |                | <--[displayed]--- |                |
 |       UI       |                   |   Calculator   |
 |                | ---[key punch]--> |                |
 +----------------+                   +----------------+

  [1] ---> "1"
  [5] ---> "15"
  [+] ---> "15"
  [3] ---> "3"
  [=] ---> "18"
  [AC] --> "0"
  [8] ---> "8"
  [0] ---> "80"
  [/] ---> "80"
  [8] ---> "8"
  [-] ---> "10"
  [4] ---> "4"
  [=] ---> "6"
```

## Commands

Download dependencies and start development server:

```
npm install
npm run dev
```

Run tests:

```
npm test
```

Build application and start local preview:

```
npm run build
npm run preview
```

## Dependencies and tools

[React](https://react.dev) - a free and open-source JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) - a build tool and development server designed to speed up modern web development.

[Vitest](https://vitest.dev/) - a blazing fast unit test framework powered by Vite.

[Testing Library](https://testing-library.com/) - a lightweight, accessible, and complete testing library that
encourages good testing practices.
