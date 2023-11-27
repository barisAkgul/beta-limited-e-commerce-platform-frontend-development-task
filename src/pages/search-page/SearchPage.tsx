import { useLocation } from "react-router-dom";

import SearchProductContainer from "~/containers/seach-product-container/SearchProductContainer";

const SearchPage: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("name") || "No query specified";

  return <SearchProductContainer query={query} />;
};

export default SearchPage;
