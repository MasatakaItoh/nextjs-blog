import { memo, ReactNode, VFC } from 'react';

import styles from '../../styles/components/Grid.module.scss';

type Props = {
  children: ReactNode;
  column?: number;
};

export const Grid: VFC<Props> = memo(function Grid(props) {
  const { children, column = 3 } = props;

  return (
    <div className={styles.grid} data-column={column}>
      {children}
    </div>
  );
});
