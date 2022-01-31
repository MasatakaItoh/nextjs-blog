import { Article } from './article';

export type Client = {
  contents: Array<Article>;
  totalCount: number;
  offset: number;
  limit: number;
};
