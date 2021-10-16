
import React,{Component} from 'react';
import "../css/PageNation.css";

class PageNation extends Component {

  setCurrentPage=(page)=>{
      alert("클릭한 페이지(PageNation):"+page)
      this.props.setCurrentPage(page)
  }

  prevPage=()=>{
    alert("이전!")
    const currentPage=this.props.currentPage
    if(currentPage===1){
      alert("더이상 갈수 없습니다!")
      return
    }
    this.props.setCurrentPage(currentPage-1)
  }

  nextPage=()=>{
    alert("다음!")
    const currentPage=this.props.currentPage
    const {totalLength,postsPerPage}=this.props
    const lastPage=Math.ceil(totalLength/postsPerPage)
    if(currentPage===lastPage){
      alert("더이상 갈 수 없습니다!")
      return
    }
    this.props.setCurrentPage(currentPage+1)
  }

  render(){
    let pageNumbers=[];
    const {totalLength,postsPerPage}=this.props
    //10,3
                            //10/3 -> 3.3 -> 4
                            //ceiling - 천장,올림함수
    for(let i=1; i<=Math.ceil(totalLength/postsPerPage); i++){
      pageNumbers.push(i)
    }

    const pageList=pageNumbers.map(page=>
      <span id="page" key={page}
      onClick={()=>this.setCurrentPage(page)}>
      {page}
      </span>
    )

    return (
      <div id="page-nation">
        <span>페이지당 포스트 갯수:{postsPerPage}</span><br/>
        <span>총 포스트 갯수:{totalLength}</span><br/>
        <span id="page" onClick={this.prevPage}>&lt;</span>
        {pageList}
        <span id="page" onClick={this.nextPage}>&gt;</span>
      </div>
    );
  }
}

export default PageNation;
