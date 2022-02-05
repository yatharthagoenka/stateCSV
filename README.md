# stateCSV

<img alt="NestJS" src="https://img.shields.io/badge/NestJS-•-brown" /> <img alt="Typescript" src="https://img.shields.io/badge/Typescript-•-pink" />
<img alt="ReactJS" src="https://img.shields.io/badge/ReactJS-•-red" /> <img alt="JS" src="https://img.shields.io/badge/JS-•-blue" /> <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-•-green" /> <img alt="PASSPORT" src="https://img.shields.io/badge/PASSPORT-•-yellow" /> <img alt="Axios" src="https://img.shields.io/badge/Axios-•-orange" /> <img alt="JWT" src="https://img.shields.io/badge/JWT-•-peach" />  <img alt="CSS" src="https://img.shields.io/badge/Bootstrap-•-black" /> 


</br>

<img src="scsv-frontend\public\landing_page.png" align="left" width="450" hspace="10" vspace="10">

A user-managed sample `Single Page Application` (SPA) made by ReactJS (frontend) and NestJS/TypeScript (backend) that lets you log-in using the registered credentials, view/add/update/delete the data relating to the states of India and their corresponding state codes, stored in a remote MongoDB database.
<br/>
The application's backend is supported through a self-designed system hosted remotely on `MongoDB Atlas`, with the data being fetched through `RESTful API` calls made by `Axios`.
</br></br>

## Features
 - Users can register and login using their desired EMail IDs and passwords. Passwords are encrypted throughn the `Passport` library for hashing the data before storing in the database for higher security.
 - The landing page and each subsequent route features a relatively simple and user-friendly UI designed and supported through `CSS/SCSS and Bootstrap`.
 - Exploits `RESTful API` supported through MongoDB Atlas, managed by `NestJS franework`, build entirely with `Typescript` .
 - The website acts as a `Single Page Application` (SPA), exploiting `ReactJS` for designing the frontend, providing the users with multiple routes for Login/Registration, Home and adding states.
 - Implemented `JSON Web Token` for user authorization and session storage. Users get a JWT upon successful login/registration which is used to protect the Put/Post/Delete methods through a self-defined `JWT Strategy`.

</br>

## Running sample application

1. Pull down the code locally
2. Open the project in your preferred IDE.
3. The cloned branch opens to the root directory for the application, containing two sub-directories for the backend (`scsv_backend`) and frontend (`scsv-frontend`) respectively.
4. ### Setting up the Backend Server
    1. Open a new terminal and navigate to the backend directory using the following command.
    ```
    cd scsv_backend
    ```
    2. Install the npm modules using the following commands before running the server
    ```
    npm i @nestjs/common @nestjs/config @nestjs/core @nestjs/mongoose @nestjs/passport @nestjs/platform-express" @types/mongodb

    npm i bcrypt jsonwebtoken mongoose passport passport-jwt

    npm i @types/bcrypt @types/express @types/node @types/passport-jwt
    ```
    3. Start the backend server using the following npm script
    ```
    npm run start:dev
    ```
    > NOTE: This starts the backend server on port 5000. You can change the setting in the `main.ts` file [here](scsv_backend\src\main.ts) <br/>
    > BASE_URI = "http://localhost:5000"

5. ### Setting up the Frontend Server
    1. Open a new terminal and navigate to the frontend directory using the following command.
    ```
    cd scsv-frontend
    ```
    2. Install the npm modules using the following commands before running the server
    ```
    npm i react-router react-router-dom
    npm i @blueprintjs/core axios bootstrap material-table react-bootstrap react-table
    ```
    3. Start the frontend server using the following npm script
    ```
    npm start
    ```
    > NOTE: This starts the frontend server on port 3000. You can change the setting in the `package.json` file [here](scsv-frontend\package.json)
    4. (Optional) Make the following changes to start the server on other PORT.
    ```
    {
    ... ,
    "scripts": {
        "start": "set PORT=<PORT_VALUE> && react-scripts start",
        ...
    }

    ```

</br>

## User Guide 

- Sign-Up / Login
    - Choose an email you wish to be associated with your credentials. You will use this ID for logging in to the system.
    - Set a password that suits your liking. All passwords are encrypted/hashed before storing.
    - You will automatically be redirected to the landing page on a successful registration.
    - Logout and use the login portal for signing back in.
> All fields are case sensitive.

- Landing Page
    - Only users having successfully logged in can access this route. 
    - Showcasing all the records currently stored in the database
    - Providing an interface to edit and delete records stored on the click of a button.

- Add State 
    - Provides the user with a functionality of uploading a '.csv' file for importing new data.
    - Click the 'Populate Table' button to view the data in a tabular format.
    - Providing a simple UI for accessing the POST route for adding data in each respective field to the database.


</br>
