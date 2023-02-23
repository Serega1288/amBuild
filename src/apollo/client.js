// src/apollo/client.js
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

// if ( global.Headers === null) {
//     const fetch = require('node-fetch');
//     global.Headers = fetch.Headers
// }

const restLink = new RestLink({
  uri: 'https://americanbuilds.awbs.dev/wp-json/wc/v3/',
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
});

export default client;