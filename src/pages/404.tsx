import Link from 'next/link';

import { Meta } from '../components/common/Meta';

const Page404 = () => {
  return (
    <>
      <Meta title='Page Not Found' description='ページが見つかりませんでした' />
      <main>
        <h1>Page Not Found</h1>
        <Link href='/'>TOPページに戻る</Link>
      </main>
    </>
  );
};

export default Page404;
