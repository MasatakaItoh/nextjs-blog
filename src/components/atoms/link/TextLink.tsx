import { memo, ReactNode, VFC } from 'react';
import Link from 'next/link';

import styles from '../../styles/components/TextLink.module.scss';

type Props = {
  children: ReactNode;
  url: string;
};

export const TextLink: VFC<Props> = memo((props) => {
  const { children, url } = props;

  return (
    <Link href={url}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
});
