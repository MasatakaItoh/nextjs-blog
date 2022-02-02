import type { GetStaticProps, NextPage } from 'next';
import { Params } from 'next/dist/server/router';

import { Meta } from '../../../components/common/Meta';
import { client } from '../../../libs/client';
import { Article } from '../../../types/api/article';
import { Grid } from '../../../components/atoms/layout/Grid';
import { ArticleCard } from '../../../components/molecules/ArticleCard';
import { ClientArticle, ClientCategory } from '../../../types/api/client';
import { Category } from '../../../types/api/category';

type Props = {
  articles: Array<Article>;
  category: Category;
};

const CategoryArticle: NextPage<Props> = ({ articles, category }) => {
  const { name } = category;

  return (
    <>
      <Meta title={`${name}の記事一覧`} description={`${name}の記事一覧ページの説明文です`} />
      <main className='l-content'>
        <h1 className='c-heading01'>{`${name}の記事一覧`}</h1>
        <div className='l-content__body'>
          {articles.length > 0 ? (
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
          ) : (
            <p>該当の記事が見つかりませんでした。</p>
          )}
        </div>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get<ClientCategory>({ endpoint: 'categories' });
  const paths = data.contents.map((content) => `/articles/categories/${content.id}`);

  return { paths, fallback: false };
};

// TODO: ts error
// @ts-ignore
export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  const category = params?.category;
  if (typeof category !== 'string') return;

  const articles = await client.get<ClientArticle>({
    endpoint: 'article',
    queries: { filters: `categories[equals]${category}` },
  });
  const categories = await client.get<ClientCategory>({
    endpoint: 'categories',
    queries: { filters: `id[equals]${category}` },
  });

  return {
    props: {
      articles: articles.contents,
      category: categories.contents[0],
    },
  };
};

export default CategoryArticle;
