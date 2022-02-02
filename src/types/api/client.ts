import { Article } from './article';
import { Category } from './category';

export type ClientArticle = {
  contents: Array<Article>;
  totalCount: number;
  offset: number;
  limit: number;
};

export type ClientCategory = {
  contents: Array<Category>;
  totalCount: number;
  offset: number;
  limit: number;
};
