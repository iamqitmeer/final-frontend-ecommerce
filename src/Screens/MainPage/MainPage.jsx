import { useContext, useEffect } from "react";
import Center from "../../Component/Center/Center";
import LeftSideBar from "../../Component/LeftSideBar/LeftSideBar";
import SideBar from "../../Component/RightSideBar/SideBar";
import { UserContex } from "../../context/UserContext";
import Register from "../Register.jsx/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

function MainPage() {
  let { isUser, setIsUser } = useContext(UserContex);

  let navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/");
    } else {
      navigate("/register")
    }
  });

  return (
    <div className="flex">
      <SideBar />
      <Center />
      <LeftSideBar />
    </div>
  );
}

export default MainPage;
