import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { tittle, discription, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{zIndex:1, left: '80%'}}>
                {source}
              </span>
          <img
            src={
              !imageUrl
                ? "https://images.moneycontrol.com/static-mcnews/2022/07/sensex_nifty_sensexdown-770x433.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {tittle}...
            </h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on date{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
