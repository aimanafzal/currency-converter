## Project Description

A currency converter which converts to desired currency on real time with real time exchange rates.
It includes auto detection of internet, if you are connected to internet then it allows to use the application. Otherwise the application goes to read-only mode
The project utilizes ExchangeRate-API https://open.exchangerate-api.com/v6/latest

There are multiple APIs which could be utilized but their supported currencies are limited, few of them are listed below:

1. 1Forge provides a good amount of currency list but does not covers all currencies

2. Currencylayer provides a good amount of currency list but does not covers all currencies

3. Czech National Bank provides a good amount of currency list but does not covers all currencies

4. Fixer.io provides a good amount of currency list but does not covers all currencies

5. Exchangeratesapi.io provides a good amount of currency list but does not covers all currencies

6. Frankfurter provides a good amount of currency list with history but does not covers all currencies

7. Ratesapi provides a good amount of currency list with history but does not covers all currencies

You can also utilize these APIs if you are considering to fetch older exchange rates but the currency support is again limited. 

You can utilize a separate server to make GET or POST calls based on your selection but you have to take care of Latency issue whereas Axios within ReactJS itself is robust for 
this project. 


## Project Hosting
The project is hosted on Firebase and can be accessed here -> https://deca-games.web.app/

If you want to deploy the build by yourself on Firebase then you can follow the documentation here -> https://firebase.google.com/docs/cli?authuser=0#mac-linux-npm

## Available Scripts
Please Install all the Packages first by using 
### 'npm i'

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

You can test the components by running npm test 

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
