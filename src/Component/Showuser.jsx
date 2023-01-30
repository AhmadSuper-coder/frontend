import React,{useEffect} from 'react'
import { useState } from 'react';
import {getUser,deleteUser} from "../Service/api";

function Showuser() {

  const [users,setUsers]=useState([]);

  useEffect( ()=>{
    getAllUser();
  });

  const getAllUser=async ()=>{
    const res=await getUser();
    setUsers(res.data);
  }

  const deleteUsers=async (id)=>{
      await deleteUser(id);
      getAllUser();
  }



  return (
    <>
        <div className="container">

            <div className="row">
              <div className="col-md-8 mx-auto my-3">
                  <h1>ALL THE DATA OF USERS ARE HERE </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-11 mx-auto mt-4">
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gmail</th>
                    <th scope="col">Hobby</th>
                    <th scope='col'>Operation</th>
                  </tr>
                </thead>
                {
                  users.map((user,index)=>
                    (
                    <tbody key={user._id}>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.gmail}</td>
                        <td>{user.hobby}</td>
                        <td>
                          <button onClick={()=>{deleteUsers(user._id)}} className='btn btn-danger btn-sm mx-2'>DEL</button>
                          <a  className='btn btn-success btn-sm mx-1' href={`update/${user._id}`}>UPDATE</a>
                        </td>
                      </tr>
                    </tbody>
                    )
                  )
                }
              </table>
              </div>
            </div>
        </div>
    </>
  )
}

export default Showuser