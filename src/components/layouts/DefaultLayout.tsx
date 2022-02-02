import { memo, ReactNode, VFC } from 'react';

import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import styles from '../styles/layouts/dafaultLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
});
