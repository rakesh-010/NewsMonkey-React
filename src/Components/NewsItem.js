import React from "react";

const NewsItem =(props)=> {

    // let { title, desc, imgUrl, newsUrl, date, author, source} = this.props;
    return (
      <div>
        <div className="card" style={{minHeight:'500px'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'85%'}}
        >{props.source}</span>
          <img
            className="card-img-top"
            src={
              !props.imgUrl
                ? "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="
                : props.imgUrl
            }
            alt="Card img cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"><small className="text-muted">By {!props.author?'Unkown':props.author} on {new Date(props.date).toGMTString()}</small></p>
            <a target="_blank" rel="noreferrer" href={props.newsUrl} className="btn btn-sm btn-primary" >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
