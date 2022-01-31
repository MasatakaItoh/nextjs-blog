import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nextjs-blog-ito',
  apiKey: process.env.API_KEY,
});
