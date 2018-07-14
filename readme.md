# NHTSA API

## [API documentation](https://matheusrabelo.github.io/NHTSA-Api/public/)

## Usage
Copy the `.env.example` file to `.env`, run the install script and then some run script.

## Install

`$ npm install`

## Scripts

`$ npm run start` - Run the app in development mode

`$ npm run debug` - Run the app in debug mode

`$ npm run build` - Build the app for production mode

`$ npm run pm2` - Run the app in production mode

`$ npm run server ` - Build and run in production mode

`$ npm run lint` - Run linter

`$ npm run test` - Run tests

`$ npm run docs` - Generate the html documentation

## Docker
Build
```
$ docker build . -t nhtsa-api:latest
```

Run
```
$ docker run -p 8888:8888 nhtsa-api
```

## Author
Matheus Freire Rabelo