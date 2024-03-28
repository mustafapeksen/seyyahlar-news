import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import axios from "axios";

const yourApiKey = "apikey 6S5cANnC5ZeicD98G9pJmE:3fxjlP9aUTeF15RNqbKUNO";
const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: yourApiKey,
  },
};

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Boş bağımlılık dizisi, sadece bileşen yüklendiğinde bir kez çalışmasını sağlar

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.collectapi.com/news/getNews?country=tr&tag=general",
        config
      );
      setNews(response.data.result); // Veriyi sakla
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  }

  return (
    <div>
      <Header />
      {/* News dizisini map ederek her bir haber öğesini render et */}
      {news.map((item, index) => (
        <News
          key={index}
          title={item.name}
          image={item.image}
          description={item.description}
          source={item.source}
          url={item.url}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
