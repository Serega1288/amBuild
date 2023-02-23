// src/apollo/client.js
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import { fetch, Headers } from "cross-fetch";

// if ( global.Headers === null) {
//     const fetch = require('node-fetch');
//     global.Headers = fetch.Headers
// }


const restLink = new RestLink({
  uri: 'https://americanbuilds.awbs.dev/wp-json/wc/v3/',
  customFetch: fetch,
  customHeaders: Headers,
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
});

export default client;