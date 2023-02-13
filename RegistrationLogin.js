import React from 'react'
import  axios  from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function RegistrationLogin() {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [mob, setMob] = useState()
    const [eml, setEml] = useState()
    const [pass, setPass] = useState()
    const [cpass, setCpass] = useState()
    const [gendreX, setGendreX] = useState()
    const [gendreY, setGendreY] = useState()
    const [instru, setInstru] = useState()
    const [instruMob, setInstruMob] = useState()
    const [instruEml, setInstruEml] = useState()
    const [instruPass, setInstruPass] = useState()
    const [instruCpass, setInstruCpass] = useState()


    function Registration(){
        if(!isNaN(name)){
            setInstru("Enter Your Correct Name")
            return false
        }else if(mob.length !== 10 ){
            setInstruMob("Enter Correct Mobile number")
            return false
        }else if(!pass.length >= 6){
            setInstruPass("Password Length must be greater than 6")
            return false
        }else if(!eml.include('@') && !eml.include('.')){
            setInstruEml('Enter Valid Email ID')
        }else if(pass !== cpass){
            setInstruCpass("Your password similar to previous password")
            return false
        }else{
        axios(("http://127.0.0.1:5000/inserNew"),{
            method:"POST",
            data:{
                "Name": name,
                "Mobile": mob,
                "Email": eml,
                "password": pass,
                "ConfirmPass": cpass,
                "Genderx": gendreX,
                "Gendery": gendreY
            }

        })
        navigate("/Login");
       }  
          setName('')
          setMob('')
          setEml('')
          setPass('')
          setCpass('')
          setGendreX('')
          setGendreY("")
          setInstru('')
          setInstruMob('')
          setInstruPass('')
          setInstruCpass('')

          alert("User Created Succefully....")
          
    }
    

  return (
    <div className="container m-auto">
      <div className="container">
        <div>
          <input
            className="form-control form-control-lg m-2 w-25"
            type="text"
            placeholder="Enter Your Name"
            aria-label="default input example"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
          <span className="text-danger">{instru}</span>
        </div>
        <div>
          <input
            className="form-control form-control-lg m-2 w-25"
            type="text"
            placeholder="Enter Your Mobile no"
            aria-label="default input example"
            onChange={(e) => setMob(e.target.value)}
            value={mob}
            style={{ width: "200px" }}
          />
          <span className="text-danger">{instruMob}</span>
        </div>
        <div>
          <input
            className="form-control form-control-lg m-2 w-25"
            type="text"
            placeholder="Enter Email"
            aria-label="default input example"
            onChange={(e) => setEml(e.target.value)}
            value={eml}
            style={{ width: "200px" }}
          />
          <span className="text-danger">{instruEml}</span>
        </div>
        <div>
          <input
            className="form-control form-control-lg m-2 w-25"
            type="Password"
            placeholder="Create Password"
            aria-label="default input example"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            style={{ width: "200px" }}
          />
          <span>{instruPass}</span>
        </div>
        <div>
          <input
            className="form-control form-control-lg m-2 w-25"
            type="Password"
            placeholder="Confirm Password"
            aria-label="default input example"
            onChange={(e) => setCpass(e.target.value)}
            value={cpass}
            style={{ width: "200px" }}
          />
          <span className="text-danger">{instruCpass}</span>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            title='Male'
            onChange={(e) => setGendreX(e.target.title)}
            value={gendreX}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            title='Female'
            onChange={(e) => setGendreY(e.target.title)}
            value={gendreY}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Female
          </label>
        </div>
        <button type="button" className="btn btn-success" onClick={Registration}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default RegistrationLogin
