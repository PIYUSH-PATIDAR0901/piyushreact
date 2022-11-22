import React, { Component } from "react";

export class ApiExample extends Component {
  render() {
    const {title, description, price, Imageurl, Url, brand, rating} = this.props
    return (
      <div>
        <div className="card my-2">
          <img src={Imageurl} className="card-img-top" style={{height:'15rem'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{brand}</h5>
            <span className="card-title">{rating}</span>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              {price} Rs
            </p>
            <a href={Url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ApiExample;
