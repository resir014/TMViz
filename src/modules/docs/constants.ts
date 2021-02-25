import { join } from 'path'
import htmrTransform from '~/utils/htmrTransform'
import { H2, H3, UL, LI, Label } from './components/markdown'

export const changelogsTransform = {
  ...htmrTransform,
  h2: H2,
  h3: H3,
  ul: UL,
  li: LI,
  span: Label
}

export const changelogsDirectory = join(process.cwd(), '_changelog')

export const defaultChangelogsLength = 3
