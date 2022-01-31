import type { NextPage } from 'next';
import Link from 'next/link';

import { Meta } from '../components/common/Meta';
import { Grid } from '../components/atoms/layout/Grid';
import { TextLink } from '../components/atoms/link/TextLink';
import { ArticleCard } from '../components/molecules/ArticleCard';
import { client } from '../libs/client';
import { Article } from '../types/api/article';

type Props = {
  articles: Array<Article>;
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Meta />
      <main>
        <h1 className='heading01'>Nuxt.js Blog</h1>
        <section className='section'>
          <h2 className='heading02'>Articles</h2>
          <div className='contents'>
            <Grid>
              {articles.map((article) => (
                <article key={article.id}>
                  <ArticleCard
                    id={article.id}
                    title={article.title}
                    time={article.publishedAt}
                    excerpt={article.excerpt}
                  />
                </article>
              ))}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <TextLink url='/articles/'>記事一覧を見る</TextLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'article' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
