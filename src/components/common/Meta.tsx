import Head from 'next/head';
import { memo, VFC } from 'react';

type Props = {
  title?: string;
  description?: string;
};

export const Meta: VFC<Props> = memo(function Meta(props) {
  const { title = 'TOPページ', description = 'Next.js BlogのTOPページです' } = props;

  return (
    <Head>
      <title>{`${title} | Next.js Blog`}</title>
      <meta property='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
});
