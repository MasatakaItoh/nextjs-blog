import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { client } from '../libs/client';
import { Blog } from '../types/api/blog';

type Props = {
  blogs: Array<Blog>;
};

const Home: NextPage<Props> = (props) => {
  const { blogs } = props;
  console.log(blogs); // 仮

  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name='description' content='Next.js BlogのTOPページです' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
