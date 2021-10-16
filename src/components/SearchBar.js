import React, { Component } from "react";
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_title: "",
    };
  }

  handleChange = (e) => {
    // 인풋박스 핸들체인지
    // 현재 검색 인풋창 값을 스테이트(search_title)에 저장
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SearchMovie = () => {
    alert("검색(SearchBar)");
    const { search_title } = this.state;
    const search = search_title.toLowerCase(); // 소문자로 변환
    this.props.SearchMovie(search);
  };

  //   SearchAllMovie = async () => {
  //     alert('전체 검색(SearchBar)')
  //     this.props.SearchAllMovie()
  //   }

  SearchAllMovie = async () => {
    await alert("전체 검색(SearchBar에만 존재)");
    // 인풋 창 비우고 서치 함수까지 텀을 주기 위해 사용 (비동기가 필요)
    document.getElementById("search_input").value = "";
    this.setState({
      search_title: "",
      currentPage: 1,
    });

    this.SearchMovie();
  };

  testfunc = () => {
    alert("체크(SearchBar)");
    this.props.testfunc();
  };

  handleSelect = (e) => {
    // 셀렉트박스 핸들체인지
    // 선택된 셀렉트 박스의 값을 App에 전달
    // postsPerPage가 App의 state에 있기 때문
    const per_page = e.target.value;
    this.props.handleSelect(per_page);
  };

  render() {
    return (
      <div id="search_wrap">
          <select
            id="select_per_page"
            name="select_per_page"
            onChange={this.handleSelect}
          >
            <optgroup label="한 페이지에 표시할 영화수">
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </optgroup>
          </select>
          <input
            type="text"
            id="search_input"
            placeholder="제목 검색(영어)"
            size="15"
            name="search_title"
            onChange={this.handleChange}
          />
          <button id="search_btn" onClick={this.SearchMovie}>
            검색
          </button>
          <button onClick={this.SearchAllMovie}>전체 보기</button>
      </div>
    );
  }
}

export default SearchBar;
