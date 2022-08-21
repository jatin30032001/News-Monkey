import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {
   let  {title , description , imageUrl , newsUrl ,author, Date , source} = this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
    <h5 className="card-title" >{title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text1"><small class="text-muted">By {!author?"Unknown":author} on {Date}</small></p>
           <a href={newsUrl} target="blank" className="btn btn-dark ">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem 

