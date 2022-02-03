import { memo, VFC } from 'react';

import { ArticleCard } from '../../molecules/ArticleCard';
import { Article } from '../../../types/api/article';
import { Grid } from '../../atoms/layout/Grid';

type Props = {
  articles: Array<Article>;
};

export const ArticleList: VFC<Props> = memo(function ArticleList({ articles }) {
  return (
    <Grid>
      {articles.map((article) => (
        <article key={article.id}>
          <ArticleCard
            id={article.id}
            title={article.title}
            thumbnail={article.thumbnail}
            publishedAt={article.publishedAt}
            excerpt={article.excerpt}
          />
        </article>
      ))}
    </Grid>
  );
});
