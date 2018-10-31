# Lecture Planner [![Build Status](https://travis-ci.com/SubodhDahal/lecture-planner.svg?token=Mqz54ieof9heq97X4cWZ&branch=master)](https://travis-ci.com/SubodhDahal/lecture-planner)

An application to allow university students in Kiel to find out possible ways for them to reach their university from current/desired location.

Created for *MI133 Modern Web Development* course, Fachhochschule Kiel.

![Demo](demo.gif)

### Setup
In the terminal, run:
```
npm install
```

### Usage

#### As web app:
- Run
    - `npm start` in the terminal to run both the server and the client
    OR
    - `npm run server` to run the server.
        - *Note:* MongoDB daemon needs to be running before starting the server
    - `npm run client` to run the client
- Open [http://localhost:8080/](http://localhost:8080/)

- Lecture Schedule
    - For Lecture details, we create a mongoDB script that contains subjects and subjects timing information.
    - Use command `npm run seedlecture`


#### As mobile app:
**Once:**
- Install `cordova` globally by `npm install -g cordova`
- Run `cordova platform add android`
- Install and setup Java, Android SDK and all other things required for Android apps development

**At every run:**
- Run `npm build` to create bundled files. You may need to change `SERVER_ROOT` in `src/app/store/actions.js` file to your localhost IP address (eg. `192.168.1.106` or such) or your server address.
- Run
    - `cordova emulate android` to run on Android emulator
    OR
    - `cordova run android --device` to run on your connected Android device
