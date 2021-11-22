import * as React from 'react';

import styles from './overlay-layout.module.css';

export const OverlayLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
