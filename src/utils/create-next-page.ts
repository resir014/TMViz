import { NextPage, NextPageProps } from '~/types/next';

/**
 * Helper function to create next pages.
 */
export function createNextPage<P extends NextPage>(page: P, opts: NextPageProps = {}) {
  return Object.assign(page, opts);
}
