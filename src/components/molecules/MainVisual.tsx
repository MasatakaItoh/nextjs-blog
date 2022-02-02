import { memo, VFC } from 'react';
import dayjs from 'dayjs';

import styles from '../styles/components/MainVisual.module.scss';
import { Article } from '../../types/api/article';

type Props = Pick<Article, 'title' | 'publishedAt' | 'thumbnail'>;

export const MainVisual: VFC<Props> = memo(({ title, publishedAt, thumbnail }) => {
  const time = dayjs(publishedAt).format('YYYY/MM/DD');
  const dateTime = dayjs(publishedAt).format('YYYY-MM-DD');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <time className={styles.time} dateTime={dateTime}>
          {time}
        </time>
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
