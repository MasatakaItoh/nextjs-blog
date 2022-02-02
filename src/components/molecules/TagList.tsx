import { memo, VFC } from 'react';

import { Tag } from '../atoms/tag/Tag';
import styles from '../styles/components/TagList.module.scss';
import { Category } from '../../types/api/category';

type Props = {
  categories: Array<Category>;
};

export const TagList: VFC<Props> = memo(({ categories }) => {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category.id} className={styles.item}>
          <Tag url={`/articles/categories/${category.id}`}>{category.name}</Tag>
        </li>
      ))}
    </ul>
  );
});
