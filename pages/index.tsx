import type { NextPage } from 'next';
import Link from 'next/link';

import { Meta } from '../components/common/Meta';
import { client } from '../libs/client';
import { Article } from '../types/api/article';

type Props = {
  articles: Array<Article>;
};

const Home: NextPage<Props> = (props) => {
  const { articles } = props;

  return (
    <>
      <Meta />
      <main>
        <h1>Nuxt.js Blog</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                <a>{article.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href='/articles/'>記事一覧を見る</Link>
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
