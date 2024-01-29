import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../store/PersonalInfoSlice";

function Step1() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName((prevName) => ({ ...prevName, [e.target.name]: e.target.value }));
  };
   dispatch(getUserData(name));

  const handleClick = () => {
    navigate("/step2");
  };
  return (
    <div>
      <label> What is your name?</label>
      <br />
      <input name="name" type="text" onChange={(e) => handleChange(e)}></input>
      <button onClick={handleClick}>next</button>
    </div>
  );
}

export default Step1;
