const { db } = require('./db/db');
//Setting thee following two up for the graphQL ide
const schema = require('./graphql/schema');
const { ApolloServer } = require(`apollo-server-express`);
const PORT = process.env.PORT || 8080;
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon')
const app = express();
//production mode

// if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));
//  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}

function createApp() {
  app.use(favicon(path.join(__dirname, '..', '/build/favicon.ico')));
  app.use(cors());

  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(path.join(__dirname, '..', 'build')));

  const corsOptions = {
    origin: PORT, // was 3000
    credentials: true,
  };

  //Mounted on /graphql
  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app, cors: corsOptions });

  app.use('/api', require('./api'));

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });

  //404 error handling
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      res.status(404);
      next(err);
    } else {
      next();
    }
  });

  // error handling middleware / endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
}
const syncDb = () => db.sync();

async function bootApp() {
  await syncDb();
  await createApp();
  app.listen(PORT, () => {
    console.log(`Listening curiously at http://localhost:${PORT}`);
  });
}

bootApp();
