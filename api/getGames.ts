import axios from "axios";

import type { BoardGame } from "../models/BoardGame.model";

const getBoardGames = async () => {
  //   const baseUrl = import.meta.env.DB_HOST;
  const baseUrl = "http://localhost:3000";
  console.log("Base URL: " + baseUrl);
  const url = `${baseUrl}/games`;
  const response = await axios.get<BoardGame[]>(url);
  return response.data;
};

export default getBoardGames;
