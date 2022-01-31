import { memo, VFC } from 'react';
import Link from 'next/link';

export const Footer: VFC = memo(() => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href='/'>TOP</Link>
          </li>
          <li>
            <Link href='/articles/'>記事一覧</Link>
          </li>
        </ul>
      </nav>
      <div>
        <small>&copy; Masataka Ito</small>
      </div>
    </footer>
  );
});
