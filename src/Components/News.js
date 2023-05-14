import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  

  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);




  const api=process.env.REACT_APP_NEWS_API;

  useEffect(()=>{
    document.title=`${props.category === "general"
    ? ""
    : capitalize(props.category)} NewsMonkey-get your news here`

    props.setProgress(10);
    const urln = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api}&pageSize=${props.pg}&page=${page}`;
    fetch(urln)
    .then((data) => {
    props.setProgress(30);
      data.json()
      .then((parseData) => {
        props.setProgress(50);
          setArticles(parseData.articles);
          setLoading(false);
          setTotalResults(parseData.totalResults);
        props.setProgress(100); 
      });
    });
    //eslint-disable-next-line
  },[])

  const handleNext = async () => {

    console.log("Next");
    const urln = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${api}&pageSize=${props.pg}&page=${
      page + 1
    }`;
    await fetch(urln).then((data) => {
      data.json().then((parseData) => {
        setArticles(articles.concat(parseData.articles));
        setLoading(false);
        setTotalResults(parseData.totalResults);
        setPage(page+1);
          // page: page + 1,

      });
    });
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


    return (
      <>
        <h1 className="text-center mb-5" style={{marginTop:"90px"}}>
          NewsMonkey-{" "}
          {props.category === "general"
            ? "Top"
            : capitalize(props.category)}{" "}
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={handleNext}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container  mt-3">
            <div className="row">
              {loading&&<Loading />}
              {articles.map((ele) => {
                return (
                  <div className="col-md-4 col-sm-6 newsCard" key={ele.url}>
                    <NewsItem
                      title={!ele.title ? "" : ele.title}
                      desc={ele.description}
                      imgUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      date={ele.publishedAt}
                      author={ele.author}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

News.propTypes = {
  pg: PropTypes.number,
  country: PropTypes.string,
};



export default News;
