import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='links'>
          <ul className='ul--links'>
            <li className='fb'><i class="fa-brands fa-facebook-f"></i></li>
            <li className='ig'><i class="fa-brands fa-instagram"></i></li>
            <li className='twt'><i class="fa-brands fa-twitter"></i></li>
          </ul>
          
          
          
        </div>

        <div className='footer--text'>
            <p>&copy; 2022 by Jenny Online Clothing Store. Proudly created by <a href="kamaudev.netlify.app">Sam</a></p>
        </div>
    </div>
  )
}

export default Footer