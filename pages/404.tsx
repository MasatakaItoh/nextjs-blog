import Link from 'next/link';

const Page404 = () => {
  return (
    <main>
      <h1>Page Not Found</h1>
      <Link href='/'>TOPページに戻る</Link>
    </main>
  );
};

export default Page404;
