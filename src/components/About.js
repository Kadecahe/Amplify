import React from 'react';

const About = () => {
  return (
    <div id="about">
      <h1>Amplify Podcasts</h1>
      <p>
        Hi! I'm Kade Cahe, they/them/theirs pronouns. You can find me on{' '}
        <a
          href="https://www.linkedin.com/in/kadecahe/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        ,{' '}
        <a href="https://github.com/Kadecahe" target="_blank" rel="noreferrer">
          Github
        </a>
        , or at{' '}
        <a
          href="https://www.fullstackacademy.com/blog/teaching-fellowships"
          target="_blank"
          rel="noreferrer"
        >
          The Grace Hopper Program at Fullstack Academy completing my Software
          Engineering Teaching Fellowship
        </a>
        .
      </p>

      <p>
        Amplify is a software engineering, web development, and technology
        podcast web player offering featured podcasts that users can save in a
        personalized playlist. The project is a single-page application (SPA).
        SPA apps like Amplify, with the help of React and Redux on the front
        end, update and shift the DOM as users interact with the application
        without making an HTTP request for every link or asset requested.
        Amplify, loads the featured playlist from a Postgres database through a
        GraphQL server when the main component that renders the application
        connects with the index.html file and creates the virtual DOM that
        becomes our full-stack application. The application also utilizes
        client-side local storage, stored on the client window to persist saved
        podcasts that function as a user’s personalized playlists. Local storage
        allows the app to always provide their saved podcasts with speed since
        that particular data does not come from querying the database. This
        gives users immediate access to playing music in case the remote audio
        is rendering slower or has other issues.
      </p>

      <p>
        The Redux store serves as our single source of truth for state
        management. The store combines the reducers that keep our data and UI in
        sync. Amplify’s Redux store listens to changes to the remotely fetched
        podcasts, the locally stored podcasts, the current audio playing, the
        sound object for the remote playlists, the sound object for the, and
        whether or not the player is currently playing music. This helps us
        ensure that the left playlist only plays one track at a time, while our
        right playlist functions like a playlist.
      </p>

      <p>
        <span>This full-stack application was developed with Node, Express, React,
        Redux, GraphQL, Apollo, Postgres, Howler, Javascript, Typescript,
        Bootstrap, HTML, and CSS.</span> I challenged myself to develop some of this project with Typescript
        to learn and catch errors before runtime. To provide persistent audio, the
        application utilizes Redux to manage remote data and the window's local
        storage for saved podcasts. I chose a minimalist theme that focuses on
        podcasts. Utilizing Typescript, GraphQL, and Apollo were new concepts
        for me. The coding project also helped me learn how to leverage
        React-beautiful-dnd for drag and drop functionality. While the app
        currently loads data from a GraphQL API, the app has the code for a REST
        API as well.
      </p>
    </div>
  );
};

export default About;
