import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nextjs-blog-ito',
  // TODO: ts error
  // @ts-ignore
  apiKey: process.env.API_KEY,
});
