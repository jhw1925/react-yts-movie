import React, { Component } from "react";
import Movie from "./Movie";
import "../css/MoviesList.css";

class MoivesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies } = this.props;
    const result = movies.map((movie) => (
      <Movie
        // 키값 = {movie.넘길 데이터 경로}
        key={movie.id}
        poster_img={movie.medium_cover_image}
        genres={movie.genres}
        title={movie.title}
        year={movie.year}
        summary={movie.summary}
        runtime={movie.runtime}
        rating={movie.rating}
      ></Movie>
    ));
    return <div id="movielist_wrap">{result}</div>;
  }
}

export default MoivesList;
