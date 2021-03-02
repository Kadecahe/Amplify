const { db } = require('./db/db');
//Setting thee following two up for the graphQL ide
const schema  = require('./graphql/schema')
const { ApolloServer } = require(`apollo-server-express`)
// const postgraphql = require(`postgraphql`).postgraphql
const PORT = 8080;
const path = require('path')
const morgan = require('morgan')
const express = require('express');
const cors = require('cors');
const app = express();

function createApp() {

  app.use(cors());

  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use(express.static(path.join(__dirname, '..', 'public')));

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
  };

  //Mounted on /graphql
  const server = new ApolloServer({schema});
  server.applyMiddleware({app, cors: corsOptions})

  app.use('/api', require('./api'))
  //Starting up the server
  app.get('/api/ping', (req, res, next) => {
    res.send('pong')
  })

  // app.use(postgraphql('postgres://localhost:5432', 'public', {graphiql: true}))

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  //404 error handling
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      res.status(404)
      next(err)
    } else {
      next()
    }
  })

  // error handling middleware / endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
};
const syncDb = () => db.sync()

async function bootApp() {
  await syncDb()
  await createApp()
  app.listen(PORT, () => {
    console.log(`Listening curiously at http://localhost:${PORT}`);
  });
}

bootApp()
