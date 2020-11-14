# lunchplanner
This app was made to support home-office life. Plan what you'll eat during the week.

## .env config example:

    PORT=8089
    DB_USER=username
    DB_PASS=password
    DB_HOST=localhost
    DB_PORT=27017
    DB_NAME=lunchplanner
    REACT_APP_ENV=production      // Set it development to use api mock

## Available Scripts

In the project directory, you can run:

### `npm run start`

Builds the front end and starts the server that serves the build folder as static. After running the command, you can open http://localhost:8089 in your browser.

### `npm run server`

Starts the server. 
Before starting the server, make sure you have already run `npm run build` to create a production build of the frontend app. 

### `npm run watch`

Runs the frontend app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the frontend app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
