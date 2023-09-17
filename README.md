# Namaste React

# Parcel

- perform dev build
- created a local host server for us
- Provide HMR - Hot module replacement, i.e. whenever u save the file, the browser refresh automatically and shows the change.

- parcel uses file watching algorithm which is written in c++
- as soon as we save, parcel build our project
- parcel gives faster build bacause it use caching
- parcel also do image optimization.
- parcel do minification of files for us
- parcel also do bundling for us
- do compression of files for us, remove all white spaces from files.
- it do consistent hashing
- code splitting
- differential bundling- support older browsers
- diagnostics
- Error handling
- Https
- Tree shaking - remove unused code for u

# There are 2 types of exports/imports:

- 1. Default export/import

- we use default export when we have only 1 thing to export from that file for ex a component file.

- export default Component
- import Component from "path"

- 2. Named export/import

- we use named export when we have more than 1 thing in that file to export for ex a constant.js file where we kept all the hardcoded - values from different component files.
- We need to prefix a "export" keyword with the const like
- export const CDN_URL = "path"
- export const LOGO_URL = "path"

- while importing a named export, always wrap it inside curly braces like
- import {CDN-uRL} from "path of the file"

# React Hooks:

- They are normal javascript utility functions

- There are 2 very important hooks

1. useState() -- gives superpowerful state variables in react.
2. useEffect()
