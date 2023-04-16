# sandbox-calculator

Simple calculator web application built with [React](https://react.dev) and [MUI](https://mui.com/). It started with [a randomly picked Youtube video](https://www.youtube.com/watch?v=q4fLzIr3BwE) (I was looking for something simple to refresh my knowledge of MUI) but ended as a completely different application.

- look and styles are (mostly) the same as in the video tutorial;
- reorganized React components;
- domain logic (calculator logic) is separated from the UI part and does not
  depend on it;
- project is built with [Vite](https://vitejs.dev/) instead of CRA;
- added unit tests, implemented with [Vitest](https://vitest.dev/) and
  [Testing Library](https://testing-library.com/);

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

## TODO

- replace the displayed value (string) with a state object, the base for rich
  display in the future (indicators for different modes, etc.);
- replace the general punchKey calculator method with multiple specific methods
  (punchInput, punchBasicOperation, punchControl, etc.), which should make
  breaking calculator logic and UI into smaller components easier;
- allow UI to define the max number of displayed characters, and limit
  computed values to a defined number;
