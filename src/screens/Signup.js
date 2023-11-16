import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [credential ,setCredential ] = useState({name:"", email:"", password:"", geolocation:""});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://localhost:3000/api/creatuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name:credential.name,email:credential.email,password:credential.password, location:credential.geolocation}),
    });
    const json = await response.json();
    console.log(json)
    if (!json.success) {
        alert("valid credentials");
    }
  };

  const onChange =  (event) => {
    setCredential({...credential,[event.target.name]:event.target.value})
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" value={credential.name} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name = "email" value={credential.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credential.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
             Address
            </label>
            <input
              type="address"
              className="form-control"
              id="exampleInputAddress"
              name="geolocation"
              value={credential.geolocation}
              onChange={onChange}
            />
          </div>
          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login " className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
