import { ref } from "vue";
import { defineStore } from "pinia";
import getBoardGames from "../api/getGames";
import type { BoardGame } from "../models/BoardGame.model";

export const useGamesStore = defineStore("allgames", () => {
  const allgames = ref<BoardGame[]>([]);

  const fetch_games = async () => {
    const gamesFetched = await getBoardGames();
    console.log(gamesFetched);
    allgames.value = gamesFetched;
    console.log(allgames.value);
  };

  return { allgames, fetch_games };
});
