import "./login.css";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);

    // LOGIN USER
    const loginUser = async() => {

        try {

            const response = await fetch(
                `${API}/api/auth/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if(data.token){

                localStorage.setItem(
                    "token",
                    data.token
                );

                window.location.reload();

            } else {

                alert(data.message);

            }

        } catch(err){

            console.log(err);

        }

    };



    // SIGNUP USER
    const signupUser = async() => {

        try {

            const response = await fetch(

                `${API}/api/auth/signup`,

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        email,
                        password

                    })

                }

            );

            const data = await response.json();

            alert(data.message);

        } catch(err){

            console.log(err);

        }

    };



    return (

        <div className="loginPage">

            <div className="loginBox">

                <h1 className="logoText">
                    SigmaGPT
                </h1>

                <p className="subText">

                    {
                        isSignup ?

                        "Create your account"

                        :

                        "Continue your AI conversations"
                    }

                </p>


                <input
                    className="loginInput"
                    type="email"
                    placeholder="Enter email"

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />


                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter password"

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />


                <button
                    className="loginBtn"

                    onClick={

                        isSignup ?

                        signupUser

                        :

                        loginUser
                    }
                >

                    {
                        isSignup ?

                        "Signup"

                        :

                        "Login"
                    }

                </button>



                <p
                    className="switchAuth"

                    onClick={() =>
                        setIsSignup(!isSignup)
                    }
                >

                    {
                        isSignup ?

                        "Already have account? Login"

                        :

                        "Don't have account? Signup"
                    }

                </p>

            </div>

        </div>

    );

}

export default Login;