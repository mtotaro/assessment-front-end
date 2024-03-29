# assessment-front-end

### Tech Stack

Added libraries:

-isomorphic-fetch -> library for management of API calls.

redux, react-redux -> for the use of a 'decentralized' state, detached from the components

thunk -> integration of redux with asynchronous functions. (Call API).

enzyme, enzyme-adapter-react-16 -> for testing purpose

styled-components -> for keeping track of which components are rendered on a page and injects their own styles 

selector -> to avoid duplicated data in Redux, and this is not recomputed unless one of its arguments changes.

react-hot-loader -> to reflect changes in the running app while keeping the components mounted.

## Installation

1. Clone this repo

   ```bash
    https://github.com/mtotaro/assessment-front-end.git     
   ```
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.

2. Install dependencies & and start searching for gnomes:

   ```bash
   npm install
   npm start
   ```
   
3. Run tests:

   ```bash
   npm test
   ```
