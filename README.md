# sandbox-calculator

Simple calculator web application built with [React](https://react.dev) and
[Vite](https://vitejs.dev/). Tests are implemented with
[Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

This is **sandbox** project, used for experimenting with technologies and
tools. This code **is not** writen with goal to be used in production.

## Arhitecture

```
 +----------------+                   +----------------+
 |                | <--[displayed]--- |                |
 |    App (UI)    |                   |   Calculator   |
 |                | ---[key punch]--> |                |
 +----------------+                   +----------------+
```

### App

UI built with React components. Responsible for displaying computed values
and keypad with calculator buttons. Whenever user clicks on a button,
displayed value is recalculated and redisplayed in UI.

### Calculator

Implements domain logic. A simple calculator takes a series of keypunches and
updates displayed value with each punch:

```
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
