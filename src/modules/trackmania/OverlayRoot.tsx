import { NextSeo } from 'next-seo';
import * as React from 'react';

import styles from './OverlayRoot.module.css';

const OverlayRoot: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <NextSeo title="Overlay" />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default OverlayRoot;
