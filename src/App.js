import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import MoivesList from "./components/MoivesList.js";
import PageNation from "./components/PageNation.js";
import SearchBar from "./components/SearchBar.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      postsPerPage: 3,
      // search_title: "",
      filterd_movies: [],
    };
  }

  componentDidMount() {
    // 데이터 요청 함수 호출
    this.getMovies();
  }

  getMovies = async () => {
    // yts에 json 데이터 요청
    console.log("Movies Json 요청");
    const res = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(res);
    console.log(res.data.data.movies);

    this.setState({
      movies: res.data.data.movies, // 모든 값을 받을 배열
    });

    this.addIndex();
  };

  addIndex = () => {
    // 무비 객체에 idx 값 추가할 함수
    // idx값은 이후 indexOf로 검색 비교할 때 쓰임
    const { movies } = this.state;
    for (let i = 0; i < movies.length; i++) {
      movies[i]["idx"] = 0;
    }

    this.setState({
      filterd_movies: movies, // 검색된 값만 받아서 새로 정렬할 배열
    });
  };

  currentPosts = (totalPosts) => {
    const { currentPage, postsPerPage } = this.state;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const slicePosts = totalPosts.slice(indexOfFirst, indexOfLast);

    return slicePosts;
  };

  setCurrentPage = (page) => {
    alert("넘어온 페이지(App):" + page);
    this.setState({
      currentPage: page,
    });
  };

  SearchMovie = (search) => {
    alert('검색(App)')
    const { movies } = this.state;
    // const search = search_title.toLowerCase(); // 소문자로 변환

    for (let i = 0; i < movies.length; i++) {
      // 실질적 검사 함수
      // 무비 타이틀(소문자)와 검색값이 일치하지 않으면 idx값에 -1 일치하면 0을 대입
      if (movies[i].title.toLowerCase().indexOf(search) !== -1) {
        // indexOf값이 -1이면 일치하는 경우가 없는 것
        // 하지만 -1이 아닌 경우 이기 때문에 일치 할 때
        movies[i].idx = 0;
      } else {
        movies[i].idx = -1;
      }
    }

    let filt_movies = movies.filter((movie) => {
      // idx 값이 -1이 아닌 영화만 모아서 새로 배열을 만듬
      // 제목이 검색값과 일치하는 영화 모음
      return movie.idx !== -1;
    });

    alert('검색된 영화 개수 : ' + filt_movies.length)

    this.setState({
      filterd_movies: filt_movies,
      currentPage: 1, // 검색하면 첫 페이지로 이동
    });
  };

  handleSelect = (per_page) => {
    alert('페이지당 영화 표시 개수 : ' + per_page)
    this.setState({
      currentPage: 1,
      postsPerPage: per_page
    });
  }

  render() {
    const { postsPerPage, currentPage, filterd_movies } = this.state;
    return (
      <div id="App">
        <SearchBar
          SearchMovie={this.SearchMovie}
          handleSelect={this.handleSelect}
        ></SearchBar>
        <MoivesList movies={this.currentPosts(filterd_movies)}></MoivesList>
        <PageNation
          currentPage={currentPage}
          totalLength={filterd_movies.length}
          postsPerPage={postsPerPage}
          setCurrentPage={this.setCurrentPage}
        ></PageNation>
      </div>
    );
  }
}

export default App;
