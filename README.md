# TYPING GAME 🏎️

To run the app on your local development machine, you'll need to have node and npm installed.

## Installation Instructions

Install the required node modules by typing the following in the console from the root directory.

    npm install
    cd client
    npm install
    
Create an .env file in the root directory of the project with the following variables:
  - NODE_ENV
  
You may either set this to development or production depending on your choice.

In the client directory, create an env with the following variables:
  - REACT_APP_DEV_SOCKET
  - REACT_APP_PROD_SOCKET
  
These variables will be where the websocket is listening to. In the dev socket, write in http://localhost:{port} 
with the port number being the same one you typed in the root .env file. In the prod socket, write either the URL
that you are deploying this app to or simply copy the value of the dev socket if it's a local host.

## Running in Development Mode

In the root .env file, type the following in:

`NODE_ENV=development`

Now run the following command in the terminal.

`npm run dev`

The app should now be running in development mode!

## Running in Production Mode

In the root .env file, type the following in:

`NODE_ENV=production`

Go to the client directory and run the following command in the terminal.

`npm run build`

In the client directory, you should see a newly created build folder.

Move back up to the root directory. Run the following command in the terminal.

`npm start`

npm should use babel to write the build files and then run the server.

The app should now be running in production mode!
