import { memo, ReactNode, VFC } from 'react';

import styles from '../../styles/components/Tag.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  url: string;
};

export const Tag: VFC<Props> = memo((props) => {
  const { children, url } = props;

  return (
    <Link href={url}>
      <a className={styles.tag}>{children}</a>
    </Link>
  );
});
