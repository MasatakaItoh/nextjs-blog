import { memo, VFC } from 'react';
import Link from 'next/link';

import styles from '../styles/components/Header.module.scss';

export const Header: VFC = memo(() => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <p>
          <Link href='/'>
            <a className={styles.heading}>Next.js Blog</a>
          </Link>
        </p>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href='/'>
                <a className={styles.listLink}>TOP</a>
              </Link>
            </li>
            <li>
              <Link href='/articles/'>
                <a className={styles.listLink}>記事一覧</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
