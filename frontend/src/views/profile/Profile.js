import React from 'react'
import { Link } from 'react-router-dom';
import { signout, isAuthenticated } from "../../auth/helper";
import "./profile.css"

const Profile = ({history, path}) => {
  return (
    <div className='profile--main'>
      <h1>My Account</h1>
      <p>View and Edit your personal info below.</p>

      <div className='profile--section'>
      <div  className='profile--orders'>
        <h2>My orders</h2>
        <p>View your order history or check the status of a recent order.</p>
        <hr/>
        <p>You haven't placed any orders yet.</p>
        <p><Link to="/shop">Start browsing</Link></p>
      </div>
      

      <div className='personal--info'>
        <h2>Email</h2>
        <p>user@gmail.com</p>
      

      <form>
        <div className='personal--names'>
          <label for="first_name" id="pi">First name</label>&nbsp;
        <input type="text"  className='personal--input'/><br/>

        <label for="last_name" id="pi">&nbsp;&nbsp;Last name</label><br/>
        <input type="text" className='personal--input'/><br/>
        </div>

        <div className='personal--details'>
        <label for="email" id="pi">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='personal--input'/><br/>

        <label for="phone" id="pi">&nbsp;&nbsp;Phone</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className='personal--input'/><br/>

        </div>

        <div className='personal--buttons'>
          <button className='personal--btn'>Discard</button>
          <button className='personal--btn' id="update">Update</button>
        </div>
        
      </form>

      
      </div>
      </div> 
      <button className='personal--signout' 
        onClick={() => {
          signout(() => {
            history.push("/")
          })
        }}
      >sign out</button>
    </div>
  )
}

export default Profile