import React from 'react';

const About = () => {
  return (
    <div id="container">
      <h1>Amplify Podcasts</h1>
      <p>
        Hi! I'm Kade Cahe, they/them/theirs pronouns. This project is my
        submission for Onramp's Sirius XM + Pandora Software Engineering
        Apprenticeship finalist round. You can find me on{' '}
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
        . This project is my submission for Onramp's Sirius XM + Pandora
        Software Engineering Apprenticeship finalist round.
      </p>
      <p>
        <span>
          Amplify is a single page (SPA) full stack application developed with
          Node, Express, React, Redux, GraphQL, Apollo, Postgres, Howler,
          Bootstrap, HTLM, and CSS.
        </span>{' '}
        When seeing that the two people who will join Sirius XM + Pandora's
        Software Engineering Apprenticeship will work with Typescript, I
        challenged myself to develop this project with Typescript to catch
        errors before runtime. To provide persistent audio, the application
        utilizes Redux to manage remote data and the window's local storage for
        saved podcasts. I chose a minimalist theme that focuses on podcasts.
        Utilizing Typescript, GraphQL, and Apollo were new concepts for me. The
        coding project also helped me learn how to leverage React-beautiful-dnd
        for drag and drop functionality. While the app currently loads data from
        a GraphQL API, the app has the code for a REST API as well.
      </p>

      <p>
        I`m enjoying the process of deepening my understanding of both
        Typescript and GraphQL, which seem like the natural next steps for
        anyone with Javascript experience. Due to my mother testing positive for
        COVID-19 during the start of the project, I chose to split my time
        caring for her and working on this project. That impacted my choice in
        using Postgres instead of MongoDB and returning to Javascript. With more
        time, I would develop most of this app with Typescript and MongoDB, a NoSQL
        database that I am learning, since there are no current relational
        associative needs in the app.
      </p>

      <p>
        To the folks who selected the podcasts: thank you! It was a joy to build
        while listening to new content at the same time. I am a regular
        subscriber to JS Party.
      </p>
    </div>
  );
};

export default About;
