import getChangelogBySlug from './getChangelogBySlug'
import getChangelogSlugs from './getChangelogSlugs'

export default function getAllChangelogs(fields: string[] = []) {
  const slugs = getChangelogSlugs()
  const posts = slugs
    .map(slug => getChangelogBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => Date.parse(post2.date) - Date.parse(post1.date))
  return posts
}
