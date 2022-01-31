import { memo, VFC } from 'react';
import Link from 'next/link';

export const Header: VFC = memo(() => {
  return (
    <header>
      <p>
        <Link href='/'>Next.js Blog</Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link href='/articles/'>記事一覧</Link>
          </li>
          <li>
            <Link href='/articles/'>記事一覧</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
