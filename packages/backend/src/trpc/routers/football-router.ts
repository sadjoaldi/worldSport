import axios from "axios";
import "dotenv/config";
import { publicProcedure, router } from "../trpc";

interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}
interface FootballLeague {
  league: League;
  country: Country;
}

interface FootballApiResponse {
  get: string;
  parameters: string[];
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: FootballLeague[];
}
export const footballRouter = router({
  getCountryLeagues: publicProcedure.query(async () => {
    const baseUrl = "https://v3.football.api-sports.io/leagues";

    const response = await axios.get<FootballApiResponse>(baseUrl, {
      headers: {
        "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
        Accept: "application/json",
      },
    });

    if (!response.data.response) {
      throw new Error(
        `Failed to fetch data from Football API: ${response.statusText}`
      );
    }

    return response.data.response;
  }),
});
