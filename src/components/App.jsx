import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import axios from "axios";
import Paging from "./Paging";
import Category from "./Category";
import Loading from "./Loading";

const yourApiKey = "apikey 6S5cANnC5ZeicD98G9pJmE:3fxjlP9aUTeF15RNqbKUNO";
const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: yourApiKey,
  },
};

function App() {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([
    { turkish: "genel", english: "general" },
    { turkish: "eğlence", english: "entertainment" },
    { turkish: "sağlık", english: "health" },
    { turkish: "ekonomi", english: "economy" },
    { turkish: "teknoloji", english: "technology" },
    { turkish: "dünya", english: "world" },
  ]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(); // Sayfa yüklendiğinde veriyi getir
    window.scrollTo(0, 0);
  }, [page]);

  async function fetchData(newCategory) {
    try {
      const response = await axios.get(
        `https://api.collectapi.com/news/getNews?country=tr&tag=${
          newCategory || categories[0].english
        }&paging=${page - 1}`,
        config
      );
      setNews(response.data.result);
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
      // Hata durumunda haberleri test verisiyle doldur
      setNews([]);
    }
    setLoading(false);
  }

  function changeCategory(newCategory) {
    setNews([]); // Yeni kategoriye geçtiğinizde haberleri temizle
    setPage(1);
    setLoading(true); // Yeni kategoriye geçtiğinizde loading durumunu başlatın
    fetchData(newCategory);
  }

  function pagePlus() {
    setPage((prevPage) => prevPage + 1);
  }

  function pageMinus() {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Sayfa en az 1 olmalı
  }

  return (
    <div className="container">
      <Header />
      <div id="category">
        {/* Kategorileri listele */}
        {categories.map((value, index) => (
          <Category
            key={index}
            name={value.turkish}
            tag={() => changeCategory(value.english)}
          />
        ))}
      </div>
      {/* Haberleri listeleyin */}
      {loading ? (
        <Loading />
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
      {/* Sayfalama işlemleri */}
      <Paging minus={pageMinus} number={page} plus={pagePlus} />
      <Footer />
    </div>
  );
}

export default App;
