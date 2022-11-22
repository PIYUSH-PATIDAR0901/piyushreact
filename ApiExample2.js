import React, { Component } from "react";
import ApiExample from "./ApiExample";

export class ApiExample2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((item) => {
        this.setState({ data: item.products });
        // console.log(this.state.data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.data.map((element) => {
            return (
              <div className="col-md-3">
                <ApiExample
                  Imageurl={element.thumbnail}
                  title={element.title}
                  description={element.description.slice(0,62)}
                  price={element.price}
                  Url={element.images}
                  brand={element.brand}
                  rating={element.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ApiExample2;
