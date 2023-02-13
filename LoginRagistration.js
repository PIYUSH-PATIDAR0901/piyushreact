import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRagistration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    emal: "",
    pass: "",
  });
  const HandleInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const gotoLogin = () => {
    navigate("/Registration");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userObj = {
      userID: data.emal,
      userPassword: data.pass,
    };

    axios
      .post("http://127.0.0.1:5000/loginCheck", userObj)
      .then((response) => {
        localStorage.setItem("token", `${userObj.userID}`);
        console.log(response);
        alert("Log In Successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setData({
      emal: "",
      pass: "",
    });
  };

  return (
    <>
      <div className="col-md-4">
        <label>Click here if you have't registered ?</label>
        <button className="btn btn-warning m-2" onClick={() => gotoLogin()}>
          Click
        </button>
        <br />
        <br />
      </div>
      <div className="container">
        {/* action='http://127.0.0.1:5000/loginCheck' method="POST" */}
        <form onClick={handleSubmit}>
          <div className="container m-auto justify-content-center text-align-center">
            <div>
              <input
                className="form-control form-control-lg m-2 w-25"
                type="text"
                placeholder="Enter Email"
                aria-label="default input example"
                value={data.emal}
                onChange={HandleInp}
                name="emal"
              />
            </div>
            <div>
              <input
                className="form-control form-control-lg m-2 w-25"
                type="Password"
                name="pass"
                placeholder="Enter Password"
                aria-label="default input example"
                value={data.pass}
                onChange={HandleInp}
              />
            </div>

            <button type="button" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginRagistration;
