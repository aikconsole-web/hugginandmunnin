/* ── Shared content-layer types used across all page types ─────────────── */

export type ClaimKind   = 'science' | 'lore' | 'observation' | 'fiction';
export type PageType    = 'species-hub' | 'species-subpage' | 'comparison' | 'behaviour' |
                          'anatomy' | 'lore' | 'question' | 'myth' | 'place' | 'glossary' |
                          'tool' | 'hub' | 'trust';
export type Pillar      = 'species' | 'norse' | 'world' | 'behaviour' | 'anatomy' | 'field-guide' | 'reference';
export type SearchIntent = 'know-quick' | 'know-deep' | 'compare' | 'identify' | 'story' | 'visit' | 'do';
export type Status      = 'published' | 'merged' | 'held';

export interface InternalLink { to: string; anchor: string; }
export interface Source {
  id:       number;
  kind:     ClaimKind;
  citation: string;
  url?:     string;
  usedFor:  string;
}
export interface FAQ { q: string; a: string; }

/** Frontmatter attached to every content page */
export interface PageMeta {
  slug:               string;
  title:              string;
  metaDescription:    string;
  h1:                 string;
  pageType:           PageType;
  pillar:             Pillar;
  callNumber?:        string;
  primaryKeyword:     string;
  secondaryKeywords:  string[];
  searchIntent:       SearchIntent;
  claimKinds:         ClaimKind[];
  wordCountTarget:    number;
  status:             Status;
  lastVerified:       string;
  datePublished?:     string;
  sourcesChecked:     number;
  gatesPassed:        boolean;
  faq:                FAQ[];
  internalLinks:      InternalLink[];
  sources:            Source[];
  mergedInto?:        string;
  breadcrumbs:        { name: string; url: string }[];
}
