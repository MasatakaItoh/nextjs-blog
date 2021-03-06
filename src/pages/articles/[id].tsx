import type { GetStaticProps, NextPage } from 'next';
import { Params } from 'next/dist/server/router';

import { client } from '../../libs/client';
import { Meta } from '../../components/common/Meta';
import { MainVisual } from '../../components/molecules/MainVisual';
import { Article } from '../../types/api/article';
import { ClientArticle } from '../../types/api/client';

type Props = {
  article: Article;
};

const Article: NextPage<Props> = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <main>
        <MainVisual title={article.title} publishedAt={article.publishedAt} thumbnail={article.thumbnail} />
        <div
          className='p-entry l-content'
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
        />
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get<ClientArticle>({ endpoint: 'article' });
  const paths = data.contents.map((content) => `/articles/${content.id}`);

  return { paths, fallback: false };
};

// TODO: ts error
// @ts-ignore
export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  const id = params?.id;
  if (typeof id !== 'string') return;
  const data = await client.get<ClientArticle>({ endpoint: 'article', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};

export default Article;
