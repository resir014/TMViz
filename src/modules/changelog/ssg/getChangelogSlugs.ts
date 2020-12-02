import { readdirSync } from 'fs'
import { changelogsDirectory } from '../constants'

export default function getChangelogSlugs() {
  return readdirSync(changelogsDirectory)
}
