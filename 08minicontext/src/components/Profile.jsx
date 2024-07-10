import React, { useContext } from "react";
import Usercontext from "../context/UserContext";


function Profile() {
  const { user } = useContext(Usercontext);
  if(!user) return <div>please log in</div>

  else{
    return <div>wlcome {user.username}</div>
  }
}

export default Profile;
