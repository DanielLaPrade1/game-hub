import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
    id: number;
    slug: string;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
  
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => {
            setLoading(false);
            setGames(res.data.results)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)});
      return () => controller.abort();
    }, []);

    return {games, error, isLoading}
}

export default useGames;