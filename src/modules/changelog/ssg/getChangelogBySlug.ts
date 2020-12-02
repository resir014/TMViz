import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { BasePageProps } from '~/types/common'
import { changelogsDirectory } from '../constants'

export default function getChangelogBySlug(slug: string, fields: string[] = []): BasePageProps {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(changelogsDirectory, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: any = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
