import React from 'react'
import "./form.css"

function Form() {
  return (
    <div className='formx'>
      <div className='shout'>
        <p id="give">Give us a Shout Out</p>
        <p id="cty">nairobi</p>
        <p id="ema">jenny254@gmail.com</p>
        <p id="pho">+2547 0821 2968</p>
      </div>
      <div className='form'>
        <form>

          <div className='form--name'>
            <label for="name">Name *</label><br/>
            <input type="text" name="name" placeholder='Enter your name' className='dope' /><br/>
          </div>

          <div className='form--address'>
            <label for="address">Address *</label><br/>
            <input type="text" name="address" placeholder='Enter your address' className='dope'/><br/>
          </div>

          <div className='form--drip'>
            <label for="email">Email *</label><br/>
            <input type="text" name="email" placeholder='Enter your email' className='form--mail' /><br/>

            <label for="phone" id='phoneey'>Phone *</label><br/>
            <input type="text" name="phone" placeholder='Enter your phone number' className='form--phone' /><br/>
          </div>

          <div className='form--phn'>
            
          </div>

          <div className='form--subj'>
            <label for="subject">Subject *</label><br/>
            <input type="text" name="subject" placeholder='Subject of your message' className='dope' /><br/>
          </div>

          <div className='form--msg'>
            <label for="message">Message *</label><br/>
            <textarea name="message" placeholder='Enter your message' className='form--message'></textarea><br/>
          </div>

          <button type='submit' className='form--submit'>Submit</button><br/>
        </form>
      </div>
    </div>
  )
}

export default Form