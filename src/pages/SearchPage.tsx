import { useSearchShop } from "@/api/ShopApi";
import { PaginationSelector } from "@/components/PaginationSelector";
import { SearchBar, SearchForm } from "@/components/SearchBar";
import { SearchResultCard } from "@/components/SearchResultCard";
import { SearchResultInfo } from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
};

export const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
  });
  const { results, isLoading } = useSearchShop(searchState, city);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page:1
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page:1,
    }));
  };

  if (!results?.data || !city) {
    return <span>No result found</span>;
  }

  if (isLoading) {
    <span>Loading....</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 container mt-10 mb-10">
      <div id="cuisines-list">Cuisines here!!</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by Cuisine or Resturant Name"
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((shop) => (
          <SearchResultCard shop={shop} />
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
