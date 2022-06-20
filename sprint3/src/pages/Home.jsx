import React from "react";
import Navbar from "../components/Navbar";
import Login from "./Login";

const Home = () => {
  var authenticate=false;
  const users=[{"email":"s@gmail.com","password":"swa"},{"email":"swapnil","password":"sam"}]


const loginUser=(email,password)=>{
    users.map((ele=>{
      if(ele.email===email && ele.password===password){
          authenticate=true;
      }
    }))
  }


  return <div>

    <Navbar authenticate={authenticate}/>
    <Login loginUser={loginUser}/>
    
    </div>;
};

export default Home;
