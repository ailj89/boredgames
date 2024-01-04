export type BoardGame = {
  comments: string;
  difficulty: number;
  image?: string;
  info: string;
  length: string;
  mechanics: string[];
  name: string;
  player_count: number;
  plays: number;
  themes: string[];
  type: ["standalone" | "expansion" | "expandandalone"];
  videos: Array<{ type: string; url?: string }>;
};
