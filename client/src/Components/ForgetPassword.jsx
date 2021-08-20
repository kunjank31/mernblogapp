import React from "react";
import UserSidebar from "./UserSidebar";

const ForgetPassword = () => {
  return (
    <>
      <div className="dashboard-section">
        <div className="container">
          <div className="admin-panel">
            <UserSidebar />
            <div className="right-bar">
              <div className="forget-password">
                <form method="post">
                    <div className="form-group">
                    <label htmlFor="forgetPassword">Forget Password</label>
                        <input type="text" id='forgetPassword'/>
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

export default ForgetPassword;
