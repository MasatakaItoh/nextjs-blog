import type { NextPage } from 'next';

import { Meta } from '../../components/common/Meta';
import { client } from '../../libs/client';
import { Article } from '../../types/api/article';
import { Grid } from '../../components/atoms/layout/Grid';
import { ArticleCard } from '../../components/molecules/ArticleCard';

type Props = {
  articles: Array<Article>;
};

const Articles: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Meta />
      <main>
        <h1 className='heading01'>記事一覧</h1>
        <div className='contents'>
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
        </div>
      </main>
    </>
  );
};

export default Articles;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'article' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
