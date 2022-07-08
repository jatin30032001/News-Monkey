import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes  from 'prop-types';

export class News extends Component {
    static defaultProps ={
        country:'in',
        pagesize:8,
        category:'{this.props.category}'
    }
     static propTypes ={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category :PropTypes.string ,
     }

   

    constructor(props){
  super(props);
        this.state= {
            articles: [],
            loading: false,
            page:1,
            totalResults:0
        }
        document.tittle =`${this.props.category} - NewsMonkey`
    }

   async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=188067cdfdf443c78947d36f74bb926b&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({loading:true});
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({articles :parseddata.articles , 
            loading:false})
    }
    HandlePrev= async()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=188067cdfdf443c78947d36f74bb926b&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)
        this.setState({
            page:this.state.page-1,
            articles:parseddata.articles,
            loading:false
        })
    }
HandleNext =async()=>{
    if(!this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=188067cdfdf443c78947d36f74bb926b&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
   this.setState({loading:true});
    let data = await fetch(url)
    let parseddata = await data.json()
    this.setState({
        page:this.state.page+1,
        articles :parseddata.articles,
        loading:false
        
    })
}
}


  render() {
    return (
      <div className='container my-3'>
         <h2> NewsMonkey Top Headlines on {this.props.category}</h2>
         <div className="text-center">
          {this.state.loading&&<Spinner/>}
         </div>

        
        
         
         <div className="row">
            {this.state.articles.map((element)=>{

return<div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,40):""} description ={element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl ={element.url} author={element.author} Date = {element.publishedAt} source={element.source.name}/>
            </div>
            })}
         </div>
         
{/*         
        <div className="container d-flex justify-content-between" >
        <button type="button" disabled ={this.state.page<=1} className="btn btn-dark" onClick={this.HandlePrev}>Previous</button>
        <button type="button" disabled ={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.HandleNext}>Next</button>
        
        </div> */}


      </div>
    )
  }
}

export default News
