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
