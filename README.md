# SwivelTodoApp

## Project Description
A Todo App implemented for the provided assignment on React Native which uses Redux, Thunk, OAuth with Firebase and Local Storage

## Features
- User Authentication
- CRUD Todos
- Finding Position of Floor Plan
- User profile details (Read and Update)

## Project Architecture
The project uses atomic design principles and container component architecture. The folder structure of the project goes as follows

    ├── assets                  # All asset files used on the project
    ├── components              # Individual components used on the project
      ├── atoms                 
      ├── molecules 
      ├── organisms 
    ├── navigators              # Navigators used on the project
    ├── redux                   # Redux files
      ├── actions                 
      ├── reducers 
    ├── screens                 # Individual screens of the project
      ├── Screen                 # Root folder of the screen
        ├── index.js              # The container component which handles logic of the screen
        ├── ScreenUi.js           # The dumb presentational component which has all the elements to be displayed
        ├── styles.js             # The style file for the Ui component
    ├── services                # Service files whcih handles data outside the app
    ├── styles                  # Global styles (Colors, Fonts)

## How to run the project
1. Clone the repository into your local machine
2. Open a terminal / Command Prompt on the project directory
3. Run command "npm install" 
4. On the same terminal or if you wish to, On a different one, run command "npx react-native start" to start the Metro server
5. On a different terminal, run command "npx react-native run-android" to run the application

## Credentials to Login
Username : abdulhaady@gmail.com
Password: Haady@123

    
    
