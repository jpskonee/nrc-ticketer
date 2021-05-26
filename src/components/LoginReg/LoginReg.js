import React from 'react';
//import logo from '../LoginReg/Image/image1.jpg'


const LoginReg = () => {
    return (
        <div>
            <img src="https://t3.ftcdn.net/jpg/02/57/25/70/240_F_257257017_VVHpGsvIDSLviym1bj7todLXYLPXnxB8.jpg" alt ="railway"/>
            <div className="phone">
                <input placeholder="+234-7771300000" name="number"/> <br/>
                </div>
                <div className="Password">
                <input type="password" placeholder="Password" name="password"/><br/>
                </div>
                <div>
                <label>Remember Password</label>
                <input type="checkbox" value=""/>
            </div>
            <div>
                <button>Login</button>
                
                <p><h5>LOGIN WITH</h5></p>
                
                <img src="../LoginReg/Image/image1.jpg" alt="google"/>
        
            </div>
            <h3> _________  REGISTER HERE  _________ </h3>
                 <div className="firstname">
                <input placeholder="Firstname" name="firstname"/> <br/>
                </div>
                <div className="lastname">
                <input placeholder="Lastname" name="lastname"/><br/>
                </div>
                <div className="phone-number">
                <input placeholder="+234-7771300000" name="number"/><br/>
                </div>
                <div className="email">
                <input placeholder="rail@gmail.com" name="email"/><br/>
                </div>
                <div className="password">
                <input type="password" placeholder="Password" name="password"/><br/>
                </div>
                <button>Sign up</button>
                
        </div>
    )
}

export default LoginReg
