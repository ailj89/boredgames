export type BoardGame = {
  base_games?: Array<any>;
  comments?: string;
  date_acquired?: string;
  difficulty?: number;
  expansions?: Array<any>;
  goal?: string;
  has_expansion?: boolean;
  has_setup?: boolean;
  id?: number;
  image?: string;
  info?: string;
  is_expansion?: boolean;
  is_promo?: boolean;
  length?: string;
  mechanics?: string[];
  minplayers: number;
  maxplayers: number;
  minplaytime?: number;
  maxplaytime?: number;
  name: string;
  plays?: number;
  price?: number;
  rating?: number;
  released?: string;
  setup_images?: string[];
  setup_videos?: Array<{ type: string; url?: string }>;
  themes?: string[];
  type?:
    | "Standalone"
    | "Expansion"
    | "Expandandalone"
    | "Promo"
    | "Modular"
    | "Cosmetic";
  videos?: Array<{ type: string; url?: string }>;
};
