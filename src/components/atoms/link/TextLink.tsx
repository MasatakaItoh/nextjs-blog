import { memo, ReactNode, VFC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from '../../styles/components/TextLink.module.scss';

type Props = {
  children: ReactNode;
  url: string;
  isBack?: boolean;
};

export const TextLink: VFC<Props> = memo(function TextLink({ children, url, isBack = false }) {
  return (
    <Link href={url}>
      <a className={clsx(styles.link, { [styles.backLink]: isBack })}>{children}</a>
    </Link>
  );
});
