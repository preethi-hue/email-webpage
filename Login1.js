import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Login1.css";
function Login1() {
    const [loginpassword,setloginpassword] = useState('');
    const location = useLocation();
     const navigate = useNavigate();
     const email = location.state?.email;
     const name1 = location.state?.name1;
     const Loginpassword1 = async(e) => {
            e.preventDefault();
            const res = await axios.post('http://localhost:5000/login/loginword',{email,loginpassword});
            if(res.data.status === 'ok'){
                alert("Login Successfully!");
                navigate('/Thank1');
            }
            else
                alert(res.data.error);
     }
    return(
        <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="logo" className="logo"></img>
        <h2 id="name6">Hello {name1}👋</h2>
        <form onSubmit={Loginpassword1} id ="mailbox4">
        <h4>To continue, first verify it's you</h4>
        <input  type="password" id="password" placeholder="Enter Password"  onChange={(e)=> setloginpassword (e.target.value)} required></input>
        <button type="Submit" className="loginbutton">Login</button>
        </form>
        </div>
    )
}
export default Login1;
