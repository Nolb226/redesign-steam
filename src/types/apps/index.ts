export type IApp = {
  poster: string;
  sale?: number;
  id: string;
  name: string;
  release_date: string;
  required_age: number;
  price: number;
  dlc_count: number;
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  reviews: string;
  header_image: string;
  website: string;
  support_url: string;
  support_email: string;
  windows: boolean;
  mac: boolean;
  linux: boolean;
  metacritic_score: number;
  metacritic_url: string;
  achievements: number;
  recommendations: number;
  notes: string;
  supported_languages: string[];
  full_audio_languages: string[];
  packages: TPackage[];
  developers: string[];
  publishers: string[];
  categories: string[];
  genres: string[];
  screenshots: string[];
  movies: string[];
  user_score: number;
  score_rank: string;
  positive: number;
  negative: number;
  estimated_owners: string;
  average_playtime_forever?: number;
  average_playtime_2week?: number;
  median_playtime_forever: number;
  peak_ccu: number;
  tags: { [name: string]: number };
  background: string;
  pc_requirements?: IRequirements;
  mac_requirements?: IRequirements;
  linux_requirements?: IRequirements;
};

export type TTags = {};

export type TPackage = {
  title: string;
  description: string;
  subs: TSub[];
};

export type TSub = {
  text: string;
  description: string;
  price: number;
};

export type IRequirements = {
  minimum: string;
  recommended?: string;
};
