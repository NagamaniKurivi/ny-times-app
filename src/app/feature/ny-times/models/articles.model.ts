/**
 * Articles meta data
 */
export const ArticlesMetaData = {
  url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json',
  apiKey: '4f74e4f1f24a45cf91df78bc34e944c6',
  loader: 'Loading Articles Please wait...',
  nothing: 'Nothing Selected.. Please select from the list',
  goback: 'Go Back to List',
};

/**
 * ArticlesResults interface
 */
export interface ArticlesResults {
  copyright: string;
  num_results: number;
  status: string;
  results: Articles[];
}

/**
 * Articles interface
 */
export interface Articles {
  abstract: string;
  adx_keywords: string;
  asset_id: number;
  byline: string;
  des_facet: string[];
  geo_facet: string;
  media: Media[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  source: string;
  title: string;
  type: string;
  url: string;
  views: string;
}

/**
 * Media interface
 */
export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  media_metadata: MediaMetadata[];
}

/**
 * MediaMetadata interface
 */
export class MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}
