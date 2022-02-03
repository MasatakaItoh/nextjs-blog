import type { GetStaticProps, NextPage } from 'next';
import { Params } from 'next/dist/server/router';

import { client } from '../../../libs/client';
import { Meta } from '../../../components/common/Meta';
import { ArticleList } from '../../../components/organisms/list/ArticleList';
import { TagList } from '../../../components/molecules/TagList';
import { Article } from '../../../types/api/article';
import { ClientArticle, ClientCategory } from '../../../types/api/client';
import { Category } from '../../../types/api/category';

type Props = {
  articles: Array<Article>;
  categories: Array<Category>;
  currentCategory: Category;
  categoryIndex: number;
};

const CategoryArticle: NextPage<Props> = ({ articles, categories, currentCategory, categoryIndex }) => {
  const { name } = currentCategory;

  return (
    <>
      <Meta title={`${name}の記事一覧`} description={`${name}の記事一覧ページの説明文です`} />
      <main className='l-content'>
        <h1 className='c-heading01'>{`${name}の記事一覧`}</h1>
        <div className='l-content__body'>
          <TagList categories={categories} currentIndex={categoryIndex} />
          <div className='l-content__list'>
            {articles.length > 0 ? <ArticleList articles={articles} /> : <p>該当の記事が見つかりませんでした。</p>}
          </div>
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
  const categories = await client.get<ClientCategory>({ endpoint: 'categories' });
  const categoryIndex = categories.contents.findIndex((c) => c.id === category);

  return {
    props: {
      articles: articles.contents,
      categories: categories.contents,
      currentCategory: categories.contents[categoryIndex],
      categoryIndex: categoryIndex,
    },
  };
};

export default CategoryArticle;
