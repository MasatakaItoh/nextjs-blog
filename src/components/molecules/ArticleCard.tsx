import { memo, VFC } from 'react';
import Link from 'next/link';

import { Card } from '../atoms/card/Card';
import styles from '../styles/components/ArticleCard.module.scss';
import { Article } from '../../types/api/article';

type Props = Pick<Article, 'id' | 'title' | 'thumbnail' | 'publishedAt' | 'excerpt'>;

export const ArticleCard: VFC<Props> = memo((props) => {
  const { id, title, thumbnail, publishedAt, excerpt } = props;

  return (
    <Card>
      <div className={styles.container}>
        <Link href={`/articles/${id}`}>
          <a className={styles.content}>
            <h3 className={styles.heading}>{title}</h3>
            <div className={styles.thumbnail}>
              <img src={thumbnail.url} alt='' width={thumbnail.width} height={thumbnail.height} decoding='async' />
            </div>
            <p className={styles.time}>{publishedAt}</p>
            <p className={styles.excerpt}>{excerpt}</p>
          </a>
        </Link>
      </div>
    </Card>
  );
});
