import { SearchState } from "@/pages/SearchPage";
import { shopResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useSearchShop = (searchState: SearchState, city?: string) => {
  const createSearchRequest = async (): Promise<shopResponse> => {
    const params = new URLSearchParams();

    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    
    const response = await fetch(
      `${API_BASE_URL}/api/shop/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get shop");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchShops", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};
