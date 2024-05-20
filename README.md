Once you clone or unzip this project, make sure to do this:
Open your terminal, enter in the directory of this proyect and the write 'npm install'.

If you have your own API_KEY, go to .env and change the REACT_APP_API_KEY, if not, you can use mine, but be warned that this key has a limit of consultings per day.

Then, we gonna try in the terminal 'npm start' to start the proyect in your [localhost:3000](http://localhost:3000/), if the service is getting a CORS error, we'll need another step.
Cancel the process or kill the terminal, and then write this in your terminal (make sure you have Chrome installed in your computer):
MacOS: open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
Windows: chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security --disable-site-isolation-trials

This will open a new browser with web security disabled. You can now access your project in this browser without worrying about the CORS errors.

And there you go, you can browse the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
