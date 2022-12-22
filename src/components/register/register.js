import React from "react";
import "./register.css"
import { Link } from "react-router-dom";

export const Register = () =>{
    return(
        <div class="contain" id="register">
        <form name="regform" onsubmit="return afun()" action="php/register.php" method="POST">
    
        <h class="header">
        Registration
    </h>

    
    <div class="main">
        <div class="sub1">
            <p>
            First Name
            </p>
            <input type="text" name="fname" placeholder="Enter first name"required />
            <p>
                Email
            </p>
            <input type="email" name="mname" placeholder="you@example.com"required />
            <p>
                Password
            </p>
            <input type="password" name="pname" placeholder="Enter your password"required />
            <p>
                Date of Birth
            </p>
            <input type="date" name="dname" required />
        </div>

        <div class="sub2">
            <p>
                Last name
            </p>
            <input type="text" name="lname" placeholder="Enter last name"required />
            <p>
                Phone Number
            </p>
            <input type="number" name="phname" placeholder="Enter your phone number"required />
            <p>
                Confirm Password
            </p>
            <input type="password" name="cpname" placeholder="Confirm your password"required />
            <p>
                Select Gender
            </p>
            <select class="form-select" name="genname" required>
                <option value="1"> Male</option>
                <option value="2"> Female</option>
                <option value="3">Prefer not to say</option>

            </select>
        </div>

    </div>
    <div class="reg">
        <br /><br />
            
             <div id="error"></div>
             <input type="submit" name="" value="Register" id="register" />
             <br />
             
                        
        <div class="already">
            <Link to="/login">
                existing login?
            </Link>
        </div>
    </div>
</form>
</div>
    )
}