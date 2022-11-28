import React, { Component } from "react";

export class PostMethod extends Component {
  constructor() {
    super();
    this.state = { value: [], roll: "", fname: "", lname: "", profession: "" };
    this.Submit = this.Submit.bind(this);
    this.Listupdate = this.Listupdate.bind(this);
    this.ItemsDelete = this.ItemsDelete.bind(this)
  }

  Submit() {
    fetch("http://localhost:4000/Student", {
      method: "POST",
      body: JSON.stringify({
        rollno: this.state.roll,
        firstname: this.state.fname,
        lastname: this.state.lname,
        profession: this.state.profession,
      }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        // this.setState({ value: data.Student });
        console.log(data);
      })
      .catch(console.log);
  }

  componentDidMount() {
    fetch("http://localhost:4000/Student")
      .then((x) => x.json())
      .then((res) => this.setState({ value: res }))
      .catch(console.log);
      // let inserted = false
      // if(inserted === true){
      //   alert("Data not Inserted")
      // }else(
      //   alert("Data Inserted Successfully")
      // )
  }

  Listupdate(e) {
    fetch(`http://localhost:4000/Student/${e.target.value}`, {
      method: "PUT",
      body: JSON.stringify({
        rollno: this.state.roll,
        firstname: this.state.fname,
        lastname: this.state.lname,
        profession: this.state.profession,
      }),
      headers:{"content-type": "application/json; charset=UTF-8"}
    });
    
  }

  ItemsDelete(e) {
    fetch(`http://localhost:4000/Student/${e.target.value}` , {
        method: 'DELETE',
        headers: { "content-type": "application/json; charset=UTF-8" }
    })
}


  render() {
    return (
      <>
        <div className="container">
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter your Roll no"
              aria-label="default input example"
              name="roll"
              onChange={(e) => this.setState({ roll: e.target.value })}
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter First Name"
              aria-label="default input example"
              name="Fname"
              onChange={(e) => this.setState({ fname: e.target.value })}
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter Last Name"
              aria-label="default input example"
              name="lname"
              onChange={(e) => this.setState({ lname: e.target.value })}
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Profession"
              aria-label="default input example"
              name="profe"
              onChange={(e) => this.setState({ profession: e.target.value })}
              style={{ width: "200px" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.Submit}
          >
            Submit
          </button>
         
        </div>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Roll No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Profession</th>
                <th scope="col">Update and Delete Buttons</th>
              </tr>
            </thead>
            <tbody>
              {this.state.value.map((items) => {
                return (
                  <tr >
                    <th scope="row" >{items.id}</th>
                    <td>{items.rollno}</td>
                    <td>{items.firstname}</td>
                    <td>{items.lastname}</td>
                    <td>{items.profession}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.Listupdate}
                        value={items.id}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={this.ItemsDelete}
                        value={items.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default PostMethod;
