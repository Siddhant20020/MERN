import { Component } from "react";

const userData = {
  email: "test@test.com",
  username: "Siddhant",
  fullname: "Siddhant Rai",
  title: "Software Developer",
  skills: ["JS", "PHP", "JAVA"],
  address: "Kathmandu, Nepal",
  job_type: "Full Time",
  id: 1,
  is_active: true,
  followers: ["username123", "user234"],
  followings: ["username123", "user234", "user543", "user555"],
};
class UserData extends Component {
  render() {
    return (
      <div className="main-left-sidebar no-margin">
        <div className="user-data full-width">
          <div className="user-profile">
            <div className="username-dt">
              <div className="usr-pic">
                <img src={"./images/" + userData.username + ".jpg"} alt="" />
              </div>
            </div>
            <div className="user-specs">
              <h3>{userData.fullname}</h3>
              <span>{userData.title}</span>
            </div>
          </div>
          <ul className="user-fw-status">
            <li>
              <h4>Following</h4>
              <span>{userData.followings.length}</span>
            </li>
            <li>
              <h4>Followers</h4>
              <span>{userData.followers.length}</span>
            </li>
            <li>
              <a href="./my-profile.html" title="">
                View Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="suggestions full-width" style={{ display: "none" }}>
          <div className="sd-title">
            <h3>Suggestions</h3>
            <i className="la la-ellipsis-v"></i>
          </div>
          <div className="suggestions-list">
            <div className="suggestion-usd">
              <img src="./images/s1.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s2.png" alt="" />
              <div className="sgt-text">
                <h4>Siddhant Rai Yadav</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s3.png" alt="" />
              <div className="sgt-text">
                <h4>Poonam</h4>
                <span>Wordpress Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s4.png" alt="" />
              <div className="sgt-text">
                <h4>Bill Gates</h4>
                <span>C &amp; C++ Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s5.png" alt="" />
              <div className="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="suggestion-usd">
              <img src="./images/s6.png" alt="" />
              <div className="sgt-text">
                <h4>Siddhant Rai Yadav</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i className="la la-plus"></i>
              </span>
            </div>
            <div className="view-more">
              <a href="./index.html#" title="">
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="tags-sec full-width" style={{ display: "none" }}>
          <ul>
            <li>
              <a href="./index.html#" title="">
                Help Center
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                About
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Career
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Language
              </a>
            </li>
            <li>
              <a href="./index.html#" title="">
                Copyright Policy
              </a>
            </li>
          </ul>
          <div className="cp-sec">
            <img src="./images/lec-full.png" alt="" />
            <p>
              <img src="./images/cp.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserData;