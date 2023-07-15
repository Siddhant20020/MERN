  import { Component } from "react";

class Login extends Component{
render(){
    return  <div class="sign-in-page" style={{background: "cornflowerblue"}}>
    <div class="signin-popup">
      <div class="signin-pop">
        <div class="row">
          <div class="col-lg-6">
            <div class="cmp-info">
              <div class="cm-logo">
                <img src="images/lec.png" alt="" style={{width: "100px"}}/>
                <p>
                  LEC, is a global freelancing platform and social networking
                  where businesses and independent professionals connect and
                  collaborate remotely
                </p>
              </div>
              <img src="images/lec-full.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="login-sec">
              <ul class="sign-control">
                <li data-tab="tab-1" class="current">
                  <a href="./#" title="">Sign in</a>
                </li>
                <li data-tab="tab-2"><a href="./#" title="">Sign up</a></li>
              </ul>
              <div class="sign_in_sec current" id="tab-1">
                <h3>Sign in</h3>
                <form id="loginform">
                  <div class="row">
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Username"
                        /><i class="la la-user"></i>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                        /><i class="la la-lock"></i>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <div class="checky-sec">
                        <div class="fgt-sec">
                          <input type="checkbox" name="cc" id="c1" /><label
                            for="c1"
                            ><span></span></label
                          ><small>Remember me</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <button type="submit" value="submit">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="sign_in_sec" id="tab-2">
                  <form id="signupform">
                    <div class="row">
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                          /><i class="la la-user"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                          /><i class="la la-envelope"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Full Name"
                          /><i class="la la-user"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                          /><i class="la la-globe"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                          /><i class="la la-user"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="text"
                            name="skills"
                            id="skills"
                            placeholder="Skills (comma separated)"
                          /><i class="la la-cogs"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <select name="job_type" id="job_type">
                            <option>Job Type</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Full Time">
                              Full Time
                            </option></select
                          ><i class="la la-task"></i
                          ><span><i class="fa fa-ellipsis-h"></i></span>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                          /><i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input
                            type="password"
                            name="repeat-password"
                            id="rpassword"
                            placeholder="Repeat Password"
                          /><i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                          <div class="fgt-sec">
                            <input type="checkbox" name="cc" id="c2" /><label
                              for="c2"
                              ><span></span></label
                            ><small
                              >Yes, I understand and agree to the LEC Terms
                              &amp; Conditions.</small
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
              <div id="err"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footy-sec">
      <div class="container">
        <ul>
          <li><a href="./#" title="">Help Center</a></li>
          <li><a href="./#" title="">About</a></li>
          <li><a href="./#" title="">Privacy Policy</a></li>
          <li><a href="./#" title="">Community Guidelines</a></li>
          <li><a href="./#" title="">Cookies Policy</a></li>
          <li><a href="./#" title="">Career</a></li>
          <li><a href="./#" title="">Forum</a></li>
          <li><a href="./#" title="">Language</a></li>
          <li><a href="./#" title="">Copyright Policy</a></li>
        </ul>
        <p><img src="images/copy-icon.png" alt="" />Copyright 2019</p>
      </div>
    </div>
  </div>
}
}
export default Login;