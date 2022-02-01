import { memo, VFC } from 'react';

import styles from '../styles/components/MainVisual.module.scss';
import { Article } from '../../types/api/article';

type Props = Pick<Article, 'title' | 'publishedAt' | 'thumbnail'>;

export const MainVisual: VFC<Props> = memo(({ title, publishedAt, thumbnail }) => {
  console.log(thumbnail);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.time}>{publishedAt}</p>
      </div>
      <img
        src={thumbnail.url}
        alt=''
        width={thumbnail.width}
        height={thumbnail.height}
        decoding='async'
        className={styles.thumbnail}
      />
    </div>
  );
});
