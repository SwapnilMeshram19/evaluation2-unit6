import React from "react";
import LoginNavbar from "../components/LoginNavbar";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
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


    {{authenticate}?<LoginNavbar/>:<Navbar/>}
    <Login loginUser={loginUser}/>

    <Products/>
    
    </div>;
};

export default Home;
