import { memo, ReactNode, VFC } from 'react';

import styles from '../../styles/components/Card.module.scss';

type Props = {
  children: ReactNode;
};

export const Card: VFC<Props> = memo(function Card(props) {
  const { children } = props;

  return <div className={styles.card}>{children}</div>;
});
