import type { NextPage } from 'next';

import { Meta } from '../components/common/Meta';
import { Grid } from '../components/atoms/layout/Grid';
import { TextLink } from '../components/atoms/link/TextLink';
import { ArticleCard } from '../components/molecules/ArticleCard';
import { client } from '../libs/client';
import { Article } from '../types/api/article';
import { ClientArticle } from '../types/api/client';

type Props = {
  articles: Array<Article>;
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Meta />
      <main className='l-content'>
        <h1 className='c-heading01'>Nuxt.js Blog</h1>
        <section className='l-section'>
          <header>
            <h2 className='c-heading02'>記事一覧</h2>
            <p style={{ marginTop: '20px' }}>最新記事を3件まで表示します。</p>
          </header>
          <div className='l-content__body'>
            <div className='l-content__list'>
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
            <div className='l-content__link _right'>
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
  const data = await client.get<ClientArticle>({
    endpoint: 'article',
    queries: { limit: 3 },
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};
