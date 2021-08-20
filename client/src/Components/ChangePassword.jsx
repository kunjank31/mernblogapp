import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../Redux/asyncMethods/profileMethod";
import toast, { Toaster } from "react-hot-toast";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.Auth);
  const { msg, loading } = useSelector((state) => state.ChangePassword);
  const changePass = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = password;
    dispatch(
      changePassword({
        oldPassword,
        newPassword,
        userId: users._id,
      })
    );
  };
  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
  }, [loading, msg]);
  return (
    <>
      <div className="dashboard-section changePassword">
        <Toaster position="top-left" reverseOrder={true} />
        <div className="container">
          <div className="admin-panel">
            <UserSidebar />
            <div className="right-bar">
              <div className="change-password">
                <form onSubmit={updatePassword}>
                  <div className="form-group">
                    <label htmlFor="oldPass">Old Password</label>
                    <input
                      type="password"
                      id="oldPass"
                      value={password.oldPassword}
                      onChange={changePass}
                      name="oldPassword"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPass">New Password</label>
                    <input
                      type="password"
                      id="newPass"
                      value={password.newPassword}
                      onChange={changePass}
                      name="newPassword"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn">Change Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
