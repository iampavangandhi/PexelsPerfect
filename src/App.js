import { useState, useEffect, useCallback } from "react";

import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

import "./css/style.css";
import "./css/main.css";

import pexelsApi from "./utils/pexelsApi";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import ImagesSection from "./components/ImagesSection";
import Controls from "./components/Controls";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const [query, setQuery] = useState({
    page: 1,
    searchTerm: "animals",
  });

  const [pexelsResponse, setPexelsResponse] = useState({
    totalResponses: 0,
    photos: [],
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await pexelsApi(query.page, query.searchTerm);
      if (response) {
        setPexelsResponse({
          totalResponses: response.total_results,
          photos: response.photos,
        });
      } else {
        setPexelsResponse({
          totalResponses: 0,
          photos: [],
        });
      }
      setLoading(false);
    }
    fetchData();
  }, [query]);

  // Debouncing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedHandleChange = useCallback(
    debounce(
      (value) =>
        setQuery(() => {
          return { page: 1, searchTerm: value };
        }),
      1500
    ),
    []
  );

  const handleChange = (value) => {
    setInputValue(value);
    delayedHandleChange(value);
  };

  // Throttling
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayAfterHandleSubmit = useCallback(
    throttle((value) => {
      setLoading(true);
      setQuery(() => {
        return { page: 1, searchTerm: value };
      });
    }, 4000),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (e.target.form.elements[0].value !== inputValue) {}
    delayAfterHandleSubmit(inputValue);
  };

  return (
    <Wrapper>
      <Navbar
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ImagesSection loading={loading} pexelsResponse={pexelsResponse} />
      <Controls
        loading={loading}
        pexelsResponse={pexelsResponse}
        query={query}
        setQuery={setQuery}
        setPexelsResponse={setPexelsResponse}
      />
      <Footer />
    </Wrapper>
  );
}

export default App;
