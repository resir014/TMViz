export interface NavLinkItem {
  name: string
  href: string
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
