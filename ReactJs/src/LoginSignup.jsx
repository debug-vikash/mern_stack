import { useState } from "react";

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <h2>{isLogin ? "Login" : "Signup"}</h2>

            <textarea id="login" placeholder="Email"></textarea>
            <label htmlFor=""></label>
            <br />
            <textarea id="password" placeholder="Password"></textarea>
            <br />
            <div>
                <button onClick={() => setIsLogin(true)}>Login</button>
                <button onClick={() => setIsLogin(false)}>Signup</button>
            </div>
        </div>
    );
}

export default LoginSignup;