// import { useState, useEffect } from "react";
// import { Typography, Box } from "@mui/material";
// import { useLocation, useParams } from "react-router-dom";
// import useFetch from "~/hooks/useFetch";
// import { getSearchProductListWithName } from "~/helpers/api/requests";

// const SearchPage = () => {
//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);
//   const [query, setQuery] = useState(
//     queryParams.get("name") || "No query specified"
//   );

//   const { response, error, loading } = useFetch(() =>
//     getSearchProductListWithName(query)
//   );

//   if (loading) {
//     console.log("loading:");
//   }

//   if (error) {
//     console.error("Error:", error);
//   }

//   if (response) {
//     console.log("Data:", response);
//   }
//   return (
//     <Box p={2}>
//       <Typography variant="h5" fontWeight={700} color="rgb(45, 52, 68)">
//         Search Results for <span style={{ color: "#FC1503" }}>{query}</span>{" "}
//       </Typography>
//     </Box>
//   );
// };

// export default SearchPage;

import { useLocation } from "react-router-dom";

import SearchProductContainer from "~/containers/seach-product-container/SearchProductContainer";

const SearchPage: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("name") || "No query specified";

  return <SearchProductContainer query={query} />;
};

export default SearchPage;
