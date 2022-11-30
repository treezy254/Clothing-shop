import React from 'react'
import { Link } from 'react-router-dom'
import "./auth.css"

const Signup = () => {
  return (
    <div className='auth'>
        <h1 id="signup--h">Sign Up</h1>
        <p>Already a member? <Link to="/signin">Sign In</Link></p>
        <button className='signup--btn' id='fb'>facebook</button><br/>
        <button className='signup--btn' id="gg">google</button><br/>
        <span>or</span><br/>
        <button className='signup--btn' id='em'><Link to="/email">Signup with Email</Link></button>
    </div>
  )
}

export default Signup