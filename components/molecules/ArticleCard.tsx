import { memo, ReactNode, VFC } from 'react';
import Link from 'next/link';

import { Card } from '../atoms/card/Card';
import styles from '../styles/components/ArticleCard.module.scss';

type Props = {
  id: string;
  title: string;
  time: string;
  excerpt: string;
};

export const ArticleCard: VFC<Props> = memo((props) => {
  const { id, title, time, excerpt } = props;

  return (
    <Card>
      <div className={styles.container}>
        <Link href={`/articles/${id}`}>
          <a>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.time}>{time}</p>
            <p className={styles.excerpt}>{excerpt}</p>
          </a>
        </Link>
      </div>
    </Card>
  );
});
