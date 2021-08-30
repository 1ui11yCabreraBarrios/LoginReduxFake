import React from 'react'

function RegsiterPage() {
    return(
        <div className="col-lg-8 offset-lg-2">
        <h2>Register</h2>
        <form >
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
              
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
               
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
               
            </div>
            <div className="form-group">
                <button className="btn btn-primary"></button>
              
            </div>
        </form>
    </div>
    );
    
}

export default RegsiterPage