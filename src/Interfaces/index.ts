export interface I_MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface I_MediaItem {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  ["media-metadata"]: I_MediaMetadata[];
}

export interface I_Article {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: I_MediaItem[];
  eta_id: number;
}
