
import axios from 'axios';
export  const getuser=(email,password)=>{
    return axios.get(`http://localhost/reactchat/model/user/Getuser.php/action/getuser?useremail=${email}&user_password=${password}`)

}
export  const setsessiontoken=(user_id)=>{
    return axios.get(`http://localhost/reactchat/model/user/Getuser.php/action/setsessiontoken?user_id=${user_id}`)

}