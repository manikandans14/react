import React from "react";
import "./login.css"
import { Register } from "../register/register";
import { Link } from "react-router-dom";

export const Login = () =>{
    return(
    
    <form name="loginform" >
        <div class="first">
            <div class="sub 1">
             <p class="header1" >
                    Login  
             </p>   
             <h class="header2">
                Doesn't have any account yet? 
                <Link class="sign-header" to="/register">
                    sign up
                </Link>
                
             </h>
             <p class="mail">
                Email Address
             </p>
             <input class="mail-input"type="Email" name="mail" placeholder="you@example.com" required />
             <p class="pass">
                Password
             </p>
             <input class="mail-input"type="password" name="pass" placeholder="Enter 6 characters" required />
             <br />
             <br />
             <a class="forget-pass"href= "#">
                Forget Password?
             </a>
             
                <input type="submit" name="" value="Login" />
             
             <div id="error"></div>

            </div>
            
            </div>
        </form>
        )
}