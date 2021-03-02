import { gql } from '@apollo/client';

export const GET_PODCASTS = gql`
      query {
        getPodcasts{
          id
          name
          description
          source
          audio
          image
          title
        }
      }
`;
