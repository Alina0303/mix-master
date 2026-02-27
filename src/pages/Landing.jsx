import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      searchTerm = searchTerm || "a";
      const response = await axios.get(`${searchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <section>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </section>
  );
};
export default Landing;
