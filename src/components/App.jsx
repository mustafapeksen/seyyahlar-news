import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import axios from "axios";
import Paging from "./Paging";

const yourApiKey = "apikey 6S5cANnC5ZeicD98G9pJmE:3fxjlP9aUTeF15RNqbKUNO";
const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: yourApiKey,
  },
};

function App() {
  const [news, setNews] = useState([]);
  var [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function pagePlus() {
    setPage((page += 1));
  }

  function pageMinus() {
    setPage((page -= 1));
  }

  if (page < 1) {
    setPage(1);
  }
  var pageNumber = page - 1;

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [page]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.collectapi.com/news/getNews?country=tr&tag=general&paging=${pageNumber}`,
        config
      );
      setNews(response.data.result); // Veriyi sakla
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      {/* News dizisini map ederek her bir haber öğesini render et */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        news.map((item) => (
          <News
            key={item.key}
            title={item.name}
            image={item.image}
            description={item.description}
            source={item.source}
            url={item.url}
          />
        ))
      )}
      <Paging minus={pageMinus} number={page} plus={pagePlus} />
      <Footer />
    </div>
  );
}

export default App;
