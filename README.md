# Tic Tac Toe with Redux on the back-end as a state manager

## Purpose
This is a proof of concept application that was created to support the articles series dedicated to the Redux as a back-end state management tool, that distributes state across multiple front-ends.

In a course of three articles, I have proposed a hypothesis, that Redux might be used as a state management tool on the back-end and distribute the state across multiple front-ends, we've built a design prototype to facilitate the experiment. And finally, we've built a proof of concept multiplayer tic-tac-toe application that proved our design prototype hence proved that the hypothesis was correct.

If it is something that sounds appealing, please make yourself familiar with the series.
 1. [Server-side Redux. Part I. The Redux.](https://valerii-udodov.com/server-side-redux-the-redux/) predominantly focuses on the state distribution in the Redux and classical React applications.
 2. [Server-side Redux. Part II. The Design.](https://valerii-udodov.com/server-side-redux-the-design/) this article is where we assembling the design and answering the question when and why it would make sense to use Redux on the back-end
 3. [Server-side Redux. Part III. The Code.](https://valerii-udodov.com/server-side-redux-the-code/) this article is a step-by-step implementation of the proposed design concept. Part III is the main reason this repository exists.

## Design
Here's a brief walk through the design, please reference Part II for more details.

The main connection points are Redux and React, they are talking via WebSocket ([socket.io](https://socket.io/)). React components are dispatching actions and sending them via sockets. Actions are delivered to the server and processed by the Redux, which in its order pushes the updated state back to all the React clients.

![Design](/images/design.png)

The game is a multi-browser multiplayer game. Each move is synchronized with other players via Redux on the back-end

## Usage
At the time this repo is created NodeJS just included experimental support for ECMAScript modules. This feature is available starting from version 13. To verify your current node version run `node -v` in your terminal, and if it is lower make sure to update it.

Both front-end and back-end use [yarn](https://classic.yarnpkg.com/en/docs/install/) as the main package manager, but don't worry, you can use npm to restore packages.

To run applications open two separate terminal windows, one for the back-end, another for the front-end. Navigate to the root folder and run 

If you have yarn installed
 * To start server run `cd back-end/ && yarn install && yarn start`
 * To start client run `cd front-end/ && yarn install && yarn start`

If you don't have yarn
 * To start server run `cd back-end/ && npm i && npm start`
 * To start client run `cd front-end/ && npm i && npm start`

Now your application is running on http://localhost:8090. Open a few browser windows with this address and try to make few moves.

The application has a hard-coded host and port "http://localhost:8090", so make sure it is free or update socket.io configuration on both ends

Any questions or suggestions, don't hesitate to write me a message or fire a PR/issue.
