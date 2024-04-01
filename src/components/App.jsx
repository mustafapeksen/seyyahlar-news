import React, { useEffect, useState } from "react";
import Header from "./Header"; // Importing the Header component
import Footer from "./Footer"; // Importing the Footer component
import News from "./News"; // Importing the News component
import axios from "axios"; // Importing the Axios library
import Paging from "./Paging"; // Importing the Paging component
import Category from "./Category"; // Importing the Category component
import Loading from "./Loading"; // Importing the Loading component

const yourApiKey = "apikey 27q6B0B5kDFfv6CUgKf1fn:1pobEzrOEQYjsmHN2lusCC"; // Enter your API key here or leave it blank
const countryCode = "tr"; // Country code to fetch news from the API
const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: yourApiKey,
  },
};

function App() {
  // State declarations
  const [news, setNews] = useState([]); // State to hold news data
  const [categories, setCategories] = useState([
    // State to hold categories
    { turkish: "genel", english: "general" },
    { turkish: "eğlence", english: "entertainment" },
    { turkish: "sağlık", english: "health" },
    { turkish: "ekonomi", english: "economy" },
    { turkish: "teknoloji", english: "technology" },
    { turkish: "dünya", english: "world" },
  ]);

  const [page, setPage] = useState(1); // State to hold page number
  const [loading, setLoading] = useState(false); // State to hold loading status

  useEffect(() => {
    fetchData(); // useEffect hook to fetch data when the page loads
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, [page]); // useEffect depends on the 'page' state

  // Function to fetch data from the API
  async function fetchData(newCategory) {
    try {
      const response = await axios.get(
        `https://api.collectapi.com/news/getNews?country=${countryCode}&tag=${
          newCategory || categories[0].english
        }&paging=${page - 1}`,
        config
      );
      setNews(response.data.result); // Set the news data
    } catch (error) {
      console.error("Error while fetching data:", error); // Log error to console
      // Fill news with test data in case of error
      setNews([]);
    }
    setLoading(false); // Turn off loading status
  }

  // Function to handle category change
  function changeCategory(newCategory) {
    setNews([]); // Clear news when changing category
    setPage(1); // Reset page number
    setLoading(true); // Start loading
    fetchData(newCategory); // Fetch data for the new category
  }

  // Function to increment page number
  function pagePlus() {
    setPage((prevPage) => prevPage + 1);
  }

  // Function to decrement page number
  function pageMinus() {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Page should be at least 1
  }

  return (
    <div className="container">
      <Header /> {/* Header component */}
      <div id="category">
        {/* List categories */}
        {categories.map((value, index) => (
          <Category
            key={index}
            name={value.turkish} // Turkish category name
            tag={() => changeCategory(value.english)} // English category name
          />
        ))}
      </div>
      <div className="dropdown">
        {/* Dropdown menu visible only when the screen is small */}
        <select
          id="categoryDropdown"
          className="dropdown-menu"
          onChange={(e) => changeCategory(e.target.value)}
        >
          {/* List categories */}
          {categories.map((value, index) => (
            <option value={value.english} key={index}>
              {value.turkish.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      {/* Display news */}
      {loading ? ( // Check loading status
        <Loading /> // Show Loading component if loading
      ) : (
        news.map((item, index) => (
          <News
            key={index}
            id={item.key}
            title={item.name}
            image={item.image}
            description={item.description}
            source={item.source}
            url={item.url}
          />
        ))
      )}
      {/* Pagination */}
      <Paging minus={pageMinus} number={page} plus={pagePlus} />{" "}
      {/* Paging component */}
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;
