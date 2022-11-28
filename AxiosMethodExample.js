import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function AxiosMethodExample() {
  const [data, setData] = useState([]);
  const [roll, setRoll] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [profe, setProfe] = useState('');


  function Submit(){
    axios(("http://localhost:4000/Student"),{
      method:"POST",
      data:{
        "rollno": roll,
      "firstname": fname,
      "lastname": lname,
      "profession": profe,
      }

    })
  }
  useEffect(() => {
    axios.get("http://localhost:4000/Student")
      .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.log(`Error ${error}`));
    }, []);
    // console.log(data);

    function Listupdate(e){
      axios(('http://localhost:4000/Student/' + e.target.value), {
        method:'PUT',
        data:{
          "rollno": roll,
        "firstname": fname,
        "lastname": lname,
        "profession": profe,
        }
        })
    }    


    function ItemsDelete(e){
        axios(('http://localhost:4000/Student/' + e.target.value), {
        method:'DELETE'
        })
    }

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
             onChange= {(e)=>setRoll(e.target.value)}
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
             onChange={(e)=>setFname(e.target.value)}
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
              onChange={(e)=>setLname(e.target.value)}
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
              onChange={(e)=>setProfe(e.target.value)}
              style={{ width: "200px" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={Submit}
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
          {data.map((items) => {
            return (
              <tr>
                <th scope="row">{items.id}</th>
                <td>{items.rollno}</td>
                <td>{items.firstname}</td>
                <td>{items.lastname}</td>
                <td>{items.profession}</td>
                <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={Listupdate}
                        value={items.id}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={ItemsDelete}
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

export default AxiosMethodExample;
