import axios from "axios";

const url="http://localhost:8080";
 
const addUser=(user)=>{
    return axios.post(`${url}/add`,user);
}

const getUser= ()=>{
    return axios.get(`${url}/all`);
}

const getSingleUser=(id)=>{
    return axios.get(`${url}/${id}`);
}

const deleteUser=(id)=>{
    return axios.delete(`${url}/${id}`);
}

const updateUser=(id,updatedData)=>{
    return axios.patch(`${url}/${id}`,updatedData);
}


export {addUser,getUser,deleteUser,getSingleUser,updateUser};

