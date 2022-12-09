# Search Engine

## What's this project about?

This project contains a Front-end and a Back-end app in which user's can watch some products (which are fake data), and can filter then by title with the search input, Search Engine will bring you all products which its title contains the value you typed, ignoring letter case and accent diacritics.

## How to install the project?

For install this project you need to have NodeJS and Yarn installed on your computer, if you already have it follow the steps below:

- Clone this repository on `main` branch.
- Open a terminal on project directory and execute theese commands
  - `cd ./search-engine-api`
  - `yarn install`
  - `yarn build`
  - `yarn start`
- Open a new terminal on project directory and execute theese commands
  - `cd ./search-engine-client`
  - `yarn install`
  - `yarn build`
  - `yarn start`

With this you may have [Back-end running on `http://localhost:5500`](http://localhost:5500) and [Front-end running on `http://localhost:3000`](http://localhost:3000), then open Front-end host on any browser and use the app.

## Commands

Project have same scripts on both side Front-end and Back-end.

```
yarn start // Run app for production
yarn build // Compile and prepare a dist version for production
yarn test // Run all tests in the app
yarn dev // Run app for development
yarn test:watch // Run all tests in app watching for changes to keep running it
```

## Project Screenshots

If you don't have enough time to install the project here you can watch some screenshots about it.

![Initial View Desktop](/images/initial-desktop.png)
![Initial View Mobile](/images/initial-mobile.png)
![Search View Desktop](/images/search-desktop.png)
![Search View Mobile](/images/search-mobile.png)
![Not Found View Desktop](/images/not-found-desktop.png)
![Not Found View Mobile](/images/not-found-mobile.png)
![Single Product View Desktop](/images/single-desktop.png)
![Single Product View Mobile](/images/single-mobile.png)
