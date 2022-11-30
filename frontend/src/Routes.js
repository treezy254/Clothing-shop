import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./views/auth/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./views/auth/Signin";
import Checkout from "./views/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./views/about/About";
import Faq from "./views/faq/Faq";
import New from "./views/new/New";
import Support from "./views/support/Support";
import Contact from "./views/contact/Contact";
import Shop from "./views/shop/Shop";
import Email from "./views/auth/Email";
import Profile from "./views/profile/Profile";
import Testimonials from "./views/testimonials/Testimonials";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/new" exact component={New} />
        <Route path="/support" exact component={Support} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/testimonials" exact component={Testimonials} />

        <Route path="/chop" exact component={App} />


        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/email" exact component={Email} />
        <Route path="/cart" exact component={Checkout} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routes;
