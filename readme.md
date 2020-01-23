# ts-express-cra-starter

A bare-bones monorepo starter for running `express.js` and `create-react-app` apps built with `Typescript`. Runs frontend and backend from a single heroku app out of the box.

## Getting started

1. Fork or download this repository
2. Run `yarn` from the root directory
3. You're ready to run any of the scripts listed below
4. Profit!

## Scripts

I added some dev dependencies to make these scripts cross-platform.

| Script       | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| bs           | Run `build` then `start`. Shortcut for testing build locally                              |
| build        | Clean build of client and server. Works on heroku by default                              |
| build:client | Build client app                                                                          |
| build:server | Build server app                                                                          |
| clean        | Cleans the `/build` directory                                                             |
| copy:client  | Copies the built client to `/build`                                                       |
| dev          | Runs client and server `dev` commands in parallel                                         |
| dev:client   | Runs `dev` command for client app                                                         |
| dev:server   | Runs `dev` command for server app                                                         |
| start        | Starts the compiled server app from the `/build` directory. Runs app on heroku by default |
| test:client  | Runs client tests in watch mode                                                           |
| test:server  | Runs server tests in watch mode                                                           |

## Deploying to heroku

You'll need a heroku account and the [heroku CLI](https://devcenter.heroku.com/categories/command-line). You'll also need a git repository for deploying via git. You can run `git init` in the root directory if you don't already have git set up for the app.

1. From the root directory run `heroku create <app name>` (See [docs](https://devcenter.heroku.com/articles/creating-apps))  
   This should create the new app on your heroku account and add a new `heroku` git remote. You can verify with `git remote -v`
2. Run `git push heroku master` to deploy your combined app  
   Heroku will detect the node.js environment and will by default run `build` and then `start` so you're ready to go.

## About the apps

### Client

The client is mostly the default `create-react-app`

1. `yarn create react-app client --template Typescript`
2. Added `"proxy": "http://localhost:5000"` to `package.json`  
   This allows the client to reach the server via `/` in development mode
3. Updated `App.tsx` to include code to load the `/movies` API data

### Server

This is pretty much the exact output of [this tutorial](https://amenallah.com/node-js-typescript-jest-express-starter/) by Amenallah Hsoumi
which I found via this [StackOverflow question](https://stackoverflow.com/questions/59587296/how-to-deploy-a-typescript-nodejs-and-express-app-to-heroku). The only changes I made are:

1. Set `"outDir": "../build",` in `tsconfig.json`  
   This writes the server files directly to our desired build directory instead of having to copy them there later
2. Added a default "record" in the `MovieApi.ts` file  
   This just gives the client app something to show by default

## Other stuff

[This post](https://medium.com/codeduck/a-real-world-project-typescript-express-and-react-4701c0458e9c) by Dirk Hoekstra served as validation for my idea. The end result is similar but I wanted to use yarn workspaces.
