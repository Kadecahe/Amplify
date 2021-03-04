const { resolver } = require('graphql-sequelize');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const { PodcastModel } = require('../db/models/podcast');

//Define Podcast type
const podcastType = new GraphQLObjectType({
  name: 'Podcast',
  description: 'A podcast',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the podcast.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the podcast.',
    },
    description: {
      type: GraphQLString,
      description: 'The description of the podcast.',
    },
    source: {
      type: GraphQLString,
      description: 'The source of the podcast.',
    },
    audio: {
      type: GraphQLString,
      description: 'The audio of the podcast.',
    },
    image: {
      type: GraphQLString,
      description: 'The image of the podcast.',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the podcast.',
    },
  },
});

//schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'root',
    fields: {
      getPodcasts: {
        type: new GraphQLList(podcastType),
        resolve: resolver(PodcastModel),
      },
      getOnePodcast: {
        type: podcastType,
        args: {
          id: {
            description: 'id of the podcast',
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'createPodcast',
    fields: {
      createPodcast: {
        type: podcastType,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the podcast.',
          },
          description: {
            type: GraphQLString,
            description: 'The description of the podcast.',
          },
          source: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The source of the podcast.',
          },
          audio: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The audio of the podcast.',
          },
          image: {
            type: GraphQLString,
            description: 'The image of the podcast.',
          },
          title: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The title of the podcast.',
          },
        },
        resolve: (root, podcast, info) => {
          return PodcastModel.create(podcast).catch(err => {
            return Promise.reject(err);
          });
        },
      },
    },
  }),
});

module.exports = schema;
