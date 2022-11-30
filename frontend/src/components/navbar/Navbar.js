import './navbar.css'
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {AiOutlineShopping, AiOutlineDown } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";

import { signout, isAuthenticated } from "../../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { };
  } else {
    return { };
  }
};

const Navbar = ({ history, path }) => {
  return (
    <div className='header'>
      <div className='title'>JENNY'S ONLINE CLOTHING SHOP</div>
        <div className='nav'>

        <ul className="nav--ul">
            <li id="nav--li">
              <Link
                style={currentTab(history, "/")}
                to="/"
              >
                Home
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/shop")}
                to="/shop"
              >
                Shop
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/about")}
                to="/about"
              >
                About Us
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/faq")}
                to="/faq"
              >
                FAQ
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/contact")}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/testimonials")}
                to="/testimonials"
              >
                Testimonials
              </Link>
            </li>

            <li id="nav--li">
              <Link
                style={currentTab(history, "/new")}
                to="/new"
              >
                New Collection
              </Link>
            </li>

            

        </ul>

        <div className='profile'>
            <ul>
                {isAuthenticated() && (
                    <li id="nav--li">
                      <Link
                        style={currentTab(history, "/profile")}
                        to="/profile"
                      >
                          <CgProfile />
                      </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                      <li id="nav--li" className='profff'>
                        <Link
                          style={currentTab(history, "/signup")}
                          to="/signup"
                        >
                          <CgProfile className='proff' />
                          Log in
                        </Link>
                      </li>
                    </Fragment>
                )}
                </ul>
                
                <button type='button' className='cart-icon'>
                    <Link
                    style={currentTab(history, "/cart")}
                    to="/cart"
                >
                  <div className='carton'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 164.9 196.4" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-9"><text x="84" y="131" dy=".35em" text-anchor="middle" class="bGBBgJ jDuYHa" data-hook="items-count">4</text><path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path><path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path></svg>
                    </div>
                </Link>
                </button>
            
        </div>
      
    </div>
    <div className='divider'></div>
    </div>
    
  );
};

export default withRouter(Navbar);