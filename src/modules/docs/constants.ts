import { join } from 'path';
import { H2, H3, LI, Label, ULChangelog } from './components/markdown';
import htmrTransform from '~/utils/htmr-transform';

export const changelogsTransform = {
  ...htmrTransform,
  h2: H2,
  h3: H3,
  ul: ULChangelog,
  li: LI,
  span: Label,
};

export const changelogsDirectory = join(process.cwd(), '_changelog');

export const defaultChangelogsLength = 3;
