import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country: 'in',
    pagesize: 8,
    category: "general",

  } 
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    
  } 

  articles =  [ ]


  constructor(){
    super();
    this.state = {

      articles: this.articles,
      loading : false,
      page: 1,
    }
  }

  handleNextClick = async() =>{
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7909094fd52c42af9dc35a990dc135cb&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let dataParsed = await data.json();
      console.log(dataParsed);
      this.setState({
        page :this.state.page + 1,
        articles :dataParsed.articles,
        loading : false
      })
  }
}

  handlePrevClick =async() =>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7909094fd52c42af9dc35a990dc135cb&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let dataParsed = await data.json();
    console.log(dataParsed);
    this.setState({
      page :this.state.page - 1,
      articles :dataParsed.articles,
      loading : false
    })

  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7909094fd52c42af9dc35a990dc135cb&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let dataParsed = await data.json();
    console.log(dataParsed);
    this.setState({articles :dataParsed.articles, totalResults : dataParsed.totalResults,loading : false})
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '32px'}}>The SuN - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col md-4 " key={element.url}>
           <NewsItem  tittle = {element.title?element.title.slice(0, 45) : ""} discription={element.description? element.description.slice(0,85) : ""} 
           imageUrl={element.urlToImage} 
           newsUrl ={element.url} author = {element.author} date = {element.publishedAt} source={element.source.name}/>
         </div>  

        })}
                 
        </div>
        <div className="container d-flex justify-content-between my-5">
            <button disabled = {this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    ); 
  }
}

export default News;
