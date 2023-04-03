import React from "react";
import './newsitems.css';

const NewsItems = (props) => {
  
    let { title, description, imageUrl, newsUrl, date, author, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span
              className=" badge rounded-pill bg-secondary"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.newsanyway.com/wp-content/uploads/2022/03/In-the-news-4-10-March-2022.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toDateString()} {new Date(date).toTimeString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
            

          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
