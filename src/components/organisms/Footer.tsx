import { memo, VFC } from 'react';
import Link from 'next/link';

import styles from '../styles/components/Footer.module.scss';

export const Footer: VFC = memo(function Footer() {
  return (
    <footer className={styles.container}>
      <nav>
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
      <div className={styles.copy}>
        <small>&copy; Masataka Ito</small>
      </div>
    </footer>
  );
});
