import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentpassword, setCurrentpassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={"/myposts/sdfsdf"} className="btn">
          My Posts
        </Link>
        <div className="profile-details">
          <div className="avatar-wrapper">
            <div className="profile-avatar">
              <img src={avatar} alt="" />
            </div>
            <form className="avatar-form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => [setAvatar(e.target.files[0])]}
                accept="png, jpg, jpeg"
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile-avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Rahul Talluri</h1>
          <form className="form profile_form">
            <p className="form_error-message">this is a error message</p>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="current password"
              value={currentpassword}
              onChange={(e) => setCurrentpassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="new confirm password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
