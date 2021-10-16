import React, { Component } from "react";
import "../css/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const result = this.props.genres.map((genre, index) => (
      <span key={index}> {genre} </span>
    ));

    return (
      <div id="movie_wrap">
        <div id="img_box">
          <img src={this.props.poster_img} alt="movie profile" />
        </div>
        <div id="text_box">
          <div> {this.props.title} </div>
          <div> {this.props.year} </div>
          <div> {result} </div>
          <div>
            <FontAwesomeIcon icon={faStarHalfAlt} className="half_star" />
            {this.props.rating}
          </div>
          <div> {this.props.runtime}분 </div>
          <div> {this.props.summary} </div>
        </div>
      </div>
    );
  }
}

export default Movie;
