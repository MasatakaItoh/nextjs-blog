import { memo, ReactNode, VFC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from '../../styles/components/Tag.module.scss';

type Props = {
  children: ReactNode;
  url: string;
  isCurrent: boolean;
};

export const Tag: VFC<Props> = memo(({ children, url, isCurrent }) => {
  return (
    <Link href={url}>
      <a className={clsx(styles.tag, { [styles.currentTag]: isCurrent })}>{children}</a>
    </Link>
  );
});
