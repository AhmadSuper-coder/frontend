import React, { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const initailValue={
    name:"",
    phone:"",
    gmail:"",
    hobby:"",
}

function Adduser(){

    const [user,setUser]=useState(initailValue);
    const {name,phone,gmail,hobby}=user;
    let navigate=useNavigate()

    const handleChange=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value});
        // console.log(`${e.target.name} : ${e.target.value}`);
    }


    const addItem = async ()=>{
        await addUser(user);
        navigate("/all");
    } 

    return(
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-12">

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>

                    
                        <div className="mb-3">
                            <label className="form-label">Phone Number </label>
                            <input type="number" name="phone" value={phone} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Gmail</label>
                            <input type="gmail" name="gmail" value={gmail} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Hobby</label>
                            <input type="text" name="hobby" value={hobby} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="hobby" />
                        </div>

                        <div className="mb-5">
                            <button onClick={addItem} className="btn btn-sm btn-info px-4">save info</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Adduser;
