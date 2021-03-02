import React from 'react';

const Navigation = () => {
  return (
   <div id="container">
     <h1>
       Amplify Podcasts
     </h1>
     <p>
     Amplify is a single page fullstack aplication developed with Node, Express, Bootstrap, React, Redux, GraphQL, Apollo, Postgres, HTLM, and CSS. I originally challenged myself to develop this project with Typescript to catch errors before runtime. To provide persistent audio, the application utilizes both redux state and your browser's local storage. I chose a minimalist theme that highlights the Podcasts. Utilizing Typescript, GraphQL, and Apollo were new concepts form me. I`m enjoying the process of deepening my understanding of both Typescript and GraphQL, which seem like the natural next steps for anyone building modern apps across platforms to prevent bugs and overfetching data.
     </p>
     <p>
     This project is my submission for Onramp's Sirius XM + Pandora Software Engineering Apprenticeship finalist round.
     </p>
   </div>
  )
}

export default Navigation;

