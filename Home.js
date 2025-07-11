import React , {useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import "./Home.css";
function Home(){
     const [email,setEmail] = useState('');
      const navigate = useNavigate();
       const Email = async(e) => {
            e.preventDefault();
           try {
            const res = await axios.post('http://localhost:5000/home', { email });
          if (res.data.status === 'ok') {
          const name1 = res.data.name1;
         navigate('/Login1', { state: { email, name1 } });
        } else {
      alert(res.data.error);
    }
  } catch (error) {
    alert("Something went wrong.");
  }
       };

    return(
        <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="logo" className="logo"></img>
        <h2 id="name3">Sign in</h2>
        <h2 className="con">to continue to gmail</h2>
        <form  id ="mailbox" onSubmit={Email}>
        <input  type="email" id="email1" placeholder="Enter email" onChange={(e)=> setEmail (e.target.value)} required></input>
        <h3 id="fgmail">forget email ?</h3>
        <Link className="link1" to="./create">Create Account</Link>
        <button type="submit" className="nxtbutton">Next</button>
        </form>
        </div>
    )
}
export default Home;
