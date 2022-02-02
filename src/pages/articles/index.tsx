import type { NextPage } from 'next';

import { Meta } from '../../components/common/Meta';
import { client } from '../../libs/client';
import { Article } from '../../types/api/article';
import { Grid } from '../../components/atoms/layout/Grid';
import { ArticleCard } from '../../components/molecules/ArticleCard';
import { TagList } from '../../components/molecules/TagList';
import { ClientArticle, ClientCategory } from '../../types/api/client';
import { Category } from '../../types/api/category';

type Props = {
  articles: Array<Article>;
  categories: Array<Category>;
};

const Articles: NextPage<Props> = ({ articles, categories }) => {
  return (
    <>
      <Meta title='記事一覧' description='記事一覧ページの説明文です' />
      <main className='l-content'>
        <h1 className='c-heading01'>記事一覧</h1>
        <div className='l-content__body'>
          <TagList categories={categories} />
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
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await client.get<ClientArticle>({ endpoint: 'article' });
  const categories = await client.get<ClientCategory>({ endpoint: 'categories' });

  return {
    props: {
      articles: articles.contents,
      categories: categories.contents,
    },
  };
};

export default Articles;
