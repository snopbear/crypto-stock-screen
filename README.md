# Xtrades & CryptoTraders.

# https://snopbear.github.io/crypto-stock-screen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

# Task Description

Create a single-page Angular stock screener.
 
* It should display a list/table of cryptocurrencies matching a set of filters configured via dialog window

* Only include pairs with USDT as a base currency (e.g. include BTCUSDT, SOLUSDT but not ETHBTC, SOLUSDC)
 
* Required filters (time window is 24h):
  - Min/max trade volume in USDT (USD)
  - Min/max price change percentage
  - Min/max price range
 
* It is expected for filters to be applied locally and not rely on API calls for every change
 
* Each displayed item should contain a column with the current price updated in real time (<10s delay)
 
* Page should be properly displayed in both desktop and mobile browsers (recent Google Chrome version)
 
* Optional stretch goal - display a line chart with 24h price history on item click
 
All required data is available via Binance public API. https://developers.binance.com/docs/binance-spot-api-docs/faqs/market_data_only
 

# Task: User Profile Management Application

# Objective: 
Develop a small Angular application that allows users to ley, 60d) and Jodate their profiles,

# Requirements:


1. Project Setup : 

Use Angular CLI to set up the basic project structure.

2. Components:

- Create a CryptoChartComponent that displays charts.
- Create a CryptoListComponent that displays list.
- Create a FilterDialogComponent that displays Filter Dialog.

# Model

- Define a 'Crypto model with properties.

# Service:

- Implement a "BinanceService that handles fetching and updating crypto data.

# Routing:**

- Set up basic routing to navigate between the user list and the edit profile view.

# Forms:.

- Use Angular's Reactive Forms for the edit profile form with proper validation.


# Evaluation Criteria:

- Code Structure: Clarity, modularity, and adherence to Angular best practices..

- Functionality: All requirements should be met, with proper data flow and user interaction. Error Handling: Basic error handling and input validation in forms,

- UI/UX: Though not the primary focus, basic styling and user-friendly interface will be a plus.


# Conclusions

This task assesses a range of skills, from basic Angular concepts to more advanced practices like reactive forms and change detection strategies. It's also open-ended enough to allow candidates with different levels of expertise to showcase their skills. The interviewer can gauge the candidate's

proficiency in Angular based on how they approach the problem, the solutions they implement, and how

they handle the various aspects of the framework.



## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files and run `json-server` embedded navigate to `http://localhost:3000/.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
