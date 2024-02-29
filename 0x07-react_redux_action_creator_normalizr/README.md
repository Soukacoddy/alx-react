# 0x07. React Redux action creator+normalizr

## Description :bulb:

- Normalizr’s purpose and how to use it
- schemas and normalization of nested JSON
- core concepts of Redux
- Redux actions
- Redux action creators
- async actions in Redux
- how to write tests for Redux

## Technologies & Tools :computer:

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Mocha](https://img.shields.io/badge/≡-Mocha-8D6748?logo=Mocha&style=flat-square&labelColor=282828)](https://mochajs.org/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Nodejs](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)](https://code.visualstudio.com/)
[![React](https://img.shields.io/badge/≡-React-61DAFB?logo=React&style=flat-square&labelColor=282828)](https://reactjs.org/)
[![Webpack](https://img.shields.io/badge/≡-Webpack-8DD6F9?logo=Webpack&style=flat-square&labelColor=282828)](https://webpack.js.org/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

---

## Resources :books:

Read or watch:

- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)
- [Redux Getting started and core concepts](https://redux.js.org/introduction/getting-started)
- [Redux Actions](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
- [Async Actions](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
- [Writing tests for Redux](https://redux.js.org/usage/writing-tests)
---

## Requirements :hammer:

- Ubuntu 18.04 LTS using `Node 12.x.x` and `npm 6.x.x`

### Install NodeJS 12.22.x

```console
~$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
~$ sudo bash nodesource_setup.sh
~$ sudo apt install nodejs -y
```

### Check version

```console
~$ nodejs -v
v12.22.1
~$ npm -v
6.14.12
```

---

## Files :card_file_box:

### [0. Read data from a JSON](./task_0/dashboard/src/schema/notifications.js)

### [1. Normalize a nested JSON](./task_1/dashboard/src/schema/notifications.js)

### [2. Filter a normalized Schema](./task_2/dashboard/src/schema/notifications.js)

### [3. Create actions for the course list](./task_3/dashboard/src/actions/)

### [4. Create actions for the UI](./task_4/dashboard/src/actions/)

### [5. Create actions for the notification list](./task_5/dashboard/src/actions/)

### [6. Bound the actions](./task_6/dashboard/src/actions/)

### [7. Async Action Creators](./task_7/dashboard/src/actions/)