(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(24),i=n.n(s),c=(n(33),n(8)),o=n.n(c),l=n(12),u=n(4),h=n(5),p=n(7),d=n(6),j=(n(35),n(25)),v=n.n(j),g=(n(53),n(26)),b=n(27),f=n(0),O=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.genres.map((function(e,t){return Object(f.jsxs)("span",{children:[" ",e," "]},t)}));return Object(f.jsxs)("div",{id:"movie_wrap",children:[Object(f.jsx)("div",{id:"img_box",children:Object(f.jsx)("img",{src:this.props.poster_img,alt:"movie profile"})}),Object(f.jsxs)("div",{id:"text_box",children:[Object(f.jsxs)("div",{children:[" ",this.props.title," "]}),Object(f.jsxs)("div",{children:[" ",this.props.year," "]}),Object(f.jsxs)("div",{children:[" ",e," "]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(g.a,{icon:b.a,className:"half_star"}),this.props.rating]}),Object(f.jsxs)("div",{children:[" ",this.props.runtime,"\ubd84 "]}),Object(f.jsxs)("div",{children:[" ",this.props.summary," "]})]})]})}}]),n}(r.Component),x=(n(59),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.movies.map((function(e){return Object(f.jsx)(O,{poster_img:e.medium_cover_image,genres:e.genres,title:e.title,year:e.year,summary:e.summary,runtime:e.runtime,rating:e.rating},e.id)}));return Object(f.jsx)("div",{id:"movielist_wrap",children:e})}}]),n}(r.Component)),m=(n(60),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).setCurrentPage=function(t){alert("\ud074\ub9ad\ud55c \ud398\uc774\uc9c0(PageNation):"+t),e.props.setCurrentPage(t)},e.prevPage=function(){alert("\uc774\uc804!");var t=e.props.currentPage;1!==t?e.props.setCurrentPage(t-1):alert("\ub354\uc774\uc0c1 \uac08\uc218 \uc5c6\uc2b5\ub2c8\ub2e4!")},e.nextPage=function(){alert("\ub2e4\uc74c!");var t=e.props.currentPage,n=e.props,r=n.totalLength,a=n.postsPerPage;t!==Math.ceil(r/a)?e.props.setCurrentPage(t+1):alert("\ub354\uc774\uc0c1 \uac08 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!")},e}return Object(h.a)(n,[{key:"render",value:function(){for(var e=this,t=[],n=this.props,r=n.totalLength,a=n.postsPerPage,s=1;s<=Math.ceil(r/a);s++)t.push(s);var i=t.map((function(t){return Object(f.jsx)("span",{id:"page",onClick:function(){return e.setCurrentPage(t)},children:t},t)}));return Object(f.jsxs)("div",{id:"page-nation",children:[Object(f.jsxs)("span",{children:["\ud398\uc774\uc9c0\ub2f9 \ud3ec\uc2a4\ud2b8 \uac2f\uc218:",a]}),Object(f.jsx)("br",{}),Object(f.jsxs)("span",{children:["\ucd1d \ud3ec\uc2a4\ud2b8 \uac2f\uc218:",r]}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{id:"page",onClick:this.prevPage,children:"<"}),i,Object(f.jsx)("span",{id:"page",onClick:this.nextPage,children:">"})]})}}]),n}(r.Component)),P=n(28),C=(n(61),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(P.a)({},e.target.name,e.target.value))},r.SearchMovie=function(){alert("\uac80\uc0c9(SearchBar)");var e=r.state.search_title.toLowerCase();r.props.SearchMovie(e)},r.SearchAllMovie=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,alert("\uc804\uccb4 \uac80\uc0c9(SearchBar\uc5d0\ub9cc \uc874\uc7ac)");case 2:document.getElementById("search_input").value="",r.setState({search_title:"",currentPage:1}),r.SearchMovie();case 5:case"end":return e.stop()}}),e)}))),r.testfunc=function(){alert("\uccb4\ud06c(SearchBar)"),r.props.testfunc()},r.handleSelect=function(e){var t=e.target.value;r.props.handleSelect(t)},r.state={search_title:""},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{id:"search_wrap",children:[Object(f.jsx)("select",{id:"select_per_page",name:"select_per_page",onChange:this.handleSelect,children:Object(f.jsxs)("optgroup",{label:"\ud55c \ud398\uc774\uc9c0\uc5d0 \ud45c\uc2dc\ud560 \uc601\ud654\uc218",children:[Object(f.jsx)("option",{value:"3",children:"3"}),Object(f.jsx)("option",{value:"4",children:"4"}),Object(f.jsx)("option",{value:"5",children:"5"})]})}),Object(f.jsx)("input",{type:"text",id:"search_input",placeholder:"\uc81c\ubaa9 \uac80\uc0c9(\uc601\uc5b4)",size:"15",name:"search_title",onChange:this.handleChange}),Object(f.jsx)("button",{id:"search_btn",onClick:this.SearchMovie,children:"\uac80\uc0c9"}),Object(f.jsx)("button",{onClick:this.SearchAllMovie,children:"\uc804\uccb4 \ubcf4\uae30"})]})}}]),n}(r.Component)),S=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getMovies=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Movies Json \uc694\uccad"),e.next=3,v.a.get("https://yts.mx/api/v2/list_movies.json");case 3:t=e.sent,console.log(t),console.log(t.data.data.movies),r.setState({movies:t.data.data.movies}),r.addIndex();case 8:case"end":return e.stop()}}),e)}))),r.addIndex=function(){for(var e=r.state.movies,t=0;t<e.length;t++)e[t].idx=0;r.setState({filterd_movies:e})},r.currentPosts=function(e){var t=r.state,n=t.currentPage,a=t.postsPerPage,s=n*a,i=s-a;return e.slice(i,s)},r.setCurrentPage=function(e){alert("\ub118\uc5b4\uc628 \ud398\uc774\uc9c0(App):"+e),r.setState({currentPage:e})},r.SearchMovie=function(e){alert("\uac80\uc0c9(App)");for(var t=r.state.movies,n=0;n<t.length;n++)-1!==t[n].title.toLowerCase().indexOf(e)?t[n].idx=0:t[n].idx=-1;var a=t.filter((function(e){return-1!==e.idx}));alert("\uac80\uc0c9\ub41c \uc601\ud654 \uac1c\uc218 : "+a.length),r.setState({filterd_movies:a,currentPage:1})},r.handleSelect=function(e){alert("\ud398\uc774\uc9c0\ub2f9 \uc601\ud654 \ud45c\uc2dc \uac1c\uc218 : "+e),r.setState({currentPage:1,postsPerPage:e})},r.state={movies:[],currentPage:1,postsPerPage:3,filterd_movies:[]},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.postsPerPage,n=e.currentPage,r=e.filterd_movies;return Object(f.jsxs)("div",{id:"App",children:[Object(f.jsx)(C,{SearchMovie:this.SearchMovie,handleSelect:this.handleSelect}),Object(f.jsx)(x,{movies:this.currentPosts(r)}),Object(f.jsx)(m,{currentPage:n,totalLength:r.length,postsPerPage:t,setCurrentPage:this.setCurrentPage})]})}}]),n}(r.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.0a7f4a17.chunk.js.map