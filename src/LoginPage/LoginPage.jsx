import React from 'react';

function LoginPage() {
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" >
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                   
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                  
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                       
                        Login
                    </button>
                  
                </div>
            </form>
        </div>
    )
}



export default LoginPage


