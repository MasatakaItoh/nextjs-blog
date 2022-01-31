import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { client } from '../libs/client';
import { Article } from '../types/api/article';

type Props = {
  articles: Array<Article>;
};

const Home: NextPage<Props> = (props) => {
  const { articles } = props;
  console.log(articles); // 仮

  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name='description' content='Next.js BlogのTOPページです' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
