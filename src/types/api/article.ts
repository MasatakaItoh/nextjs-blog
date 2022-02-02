export type Article = {
  body: string;
  categories: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  } | null;
  createdAt: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail: {
    height: number;
    url: string;
    width: number;
  };
  updatedAt: string;
};
