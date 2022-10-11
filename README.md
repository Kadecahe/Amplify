
## Amplify
---
Visit the website at https://amplifypodcast.herokuapp.com/

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Amplify is a software engineering, web development, and technology podcast web player offering featured podcasts that users can save in a personalized playlist. The project is a single-page application (SPA). SPA apps like Amplify, with the help of React and Redux on the front end, update and shift the DOM as users interact with the application without making an HTTP request for every link or asset requested. Amplify, loads the featured playlist from a Postgres database through a GraphQL server when the main component that renders the application connects with the index.html file and creates the virtual DOM that becomes our full-stack application. The application also utilizes client-side local storage, stored on the client window to persist saved podcasts that function as a user’s personalized playlists. Local storage allows the app to always provide their saved podcasts with speed since that particular data does not come from querying the database. This gives users immediate access to playing music in case the remote audio is rendering slower or has other issues.

The Redux store serves as our single source of truth for state management. The store combines the reducers that keep our data and UI in sync. Amplify’s Redux store listens to changes to the remotely fetched podcasts, the locally stored podcasts, the current audio playing, the sound object for the remote playlists, the sound object for the, and whether or not the player is currently playing music. This helps us ensure that the left playlist only plays one track at a time, while our right playlist functions like a playlist.


This full-stack application was developed with Node, Express, React, Redux, GraphQL, Apollo, Postgres, Howler, Javascript, Typescript, Bootstrap, HTML, and CSS. When seeing that the two people who will join Sirius XM + Pandora's Software Engineering Apprenticeship will work with Typescript, I challenged myself to develop this project with Typescript to catch errors before runtime. To provide persistent audio, the application utilizes Redux to manage remote data and the window's local storage for saved podcasts. I chose a minimalist theme that focuses on podcasts. Utilizing Typescript, GraphQL, and Apollo were new concepts for me. The coding project also helped me learn how to leverage React-beautiful-dnd for drag and drop functionality. While the app currently loads data from a GraphQL API, the app has the code for a REST API as well.


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To use this application, you will need access to Node.js and a code editor such as Virtual Studio Code. You will also need the Postgres database.


### Installing and Start
To get started:
* Clone the repo: `https://github.com/Kadecahe/Amplify.git`
* To install dependencies, run `npm install`
* Ensure that your Postgres database is running and that you have created a database called amplify. Once your database is up, run `npm run seed` to populate the backend with the data necessary to view this application.
* You will need to start both the backend server and the front end create-react-app server to successfully run this project. You run both with one command by running `npm run start-dev`. You can also open up two terminals that start at the root of the project and run one of the following commands in each: `npm run server` and `npm start`

## 🔧 Running the tests <a name = "tests"></a>
You can check the available GraphQL API routes by visiting `https://localhost:8080/graphql`

I originally began developing this application with Typescript to catch errors before running any code. Typescript, while new to me for this project, was helpful in ensuring that the data I was rendering from the back end to the front was in line wiht what I expectd.

If you would like to see how I split up tasks, there is a project board available for this app under the projects tab of this repository.

## ⛏️ Built Using <a name = "built_using"></a>
Tech Stack:
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [Redux](https://redux.js.org/) - State Container
- [Postgres](https://www.postgresql.org/) - Database
- [Javascript](https://www.javascript.com/)
- [Typescript](https://www.typescriptlang.org/)

Tools:
- [GraphQL](https://graphql.org//) - API Query Language
- [Apollo](https://www.apollographql.com/) - Data Graph Platform
- [Howler](https://github.com/goldfire/howler.js/) - Web Audio API
- [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/) - Drag and drop utilities
- [Sequelize](https://sequelize.org/master/) - A promise based Object Relational Mapper


Of these, working with Typescript, GraphQL, Apollo, and React-beautiful-dnd were new me for this project. I wanted to challenge myself to get familiar with the potential technologies and tools that I may use at the company. I am much more comfortable using REST API, but immedietly saw how well this application could scale to handle more data without comprimising speed with GraphQL. With more time, for an application of this size, I would incorporate MongoDB, a database that I currently learning, since the data currently does not rely on relationship associations. However, if the schema increases in complexity, I would keep Postgres.

## ✍️ Authors <a name = "authors"></a>
- [@kadecahe](https://github.com/kadecahe)

![Amplify Tech Stack](https://github.com/Kadecahe/Amplify/blob/main/public/Amplify-stack.png?raw=true)
