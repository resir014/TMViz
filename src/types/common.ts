export interface NavLinkItem {
  title: string
  path: string
  isExact?: boolean
}

export interface PageMetadata {
  template?: string
  date: string
  title: string
  slug: string
}

export interface BasePageProps extends PageMetadata {
  content: string
}

export interface FooterLinks {
  title: string
  url: string
  isExternal?: boolean
}
