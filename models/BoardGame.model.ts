export type BoardGame = {
  comments?: string;
  difficulty?: number;
  image?: string;
  info?: string;
  length?: string;
  mechanics?: string[];
  name: string;
  player_count?: string;
  plays?: number;
  themes?: string[];
  type?:
    | "Standalone"
    | "Expansion"
    | "Expandandalone"
    | "Promo"
    | "Modular"
    | "Cosmetics";
  videos?: Array<{ type: string; url?: string }>;
  id?: number;
  has_expansion?: boolean;
  expansions?: Array<any>;
  is_expansion?: boolean;
  is_promo?: boolean;
  setup_images?: string[];
};
