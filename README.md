# sandbox-calculator

Simple calculator web application built with [React](https://react.dev) and
[Vite](https://vitejs.dev/). Tests are implemented with
[Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

This is **sandbox** project, used for experimenting with technologies and
tools. This code **is not** writen with goal to be used in production.

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
