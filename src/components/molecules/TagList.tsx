import { memo, VFC } from 'react';

import { Tag } from '../atoms/tag/Tag';
import styles from '../styles/components/TagList.module.scss';
import { Category } from '../../types/api/category';

type Props = {
  categories: Array<Category>;
  currentIndex?: number | null;
};

export const TagList: VFC<Props> = memo(function TagList({ categories, currentIndex = null }) {
  return (
    <ul className={styles.list}>
      {categories.map((category, index) => (
        <li key={category.id} className={styles.item}>
          <Tag url={`/articles/categories/${category.id}`} isCurrent={index === currentIndex}>
            {category.name}
          </Tag>
        </li>
      ))}
    </ul>
  );
});
