// In which State do you live?

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Step3() {
  const [selectCountry, setSelectCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedcities, setselectedcities] = useState("");
  const [interest, setInterest] = useState();
  const country = ["us", "india"];
  const myInterest = ["Dancing", "Coding", "Studing"];
  const navigate = useNavigate();
  const userName = useSelector((state) => state.personalInfo.userData.name);
  const selectedFile = useSelector((state) => state.personalInfo.images.img);

  const handleCoutrychange = (e) => {
    const selectedCountry = e.target.value;
    setSelectCountry(selectedCountry);
    console.log(selectCountry);

    switch (selectCountry) {
      case "us":
        setCities(["new york "]);
        break;
      case "india":
        setCities(["Indore"]);
        break;
      default:
        setCities([]);
    }
  };

  const handleCityChange = (e) => {
    setselectedcities(e.target.value);
  };

  const handleinterestChange = (e) => {
    setInterest(e.target.value);
  };

  const finalData = {
    name: userName,
    country: selectCountry,
    city: selectedcities,
    interest: interest,
    selectedFile: selectedFile,
  };
  console.log(finalData);

  const handleClick = () => {
    axios
      .post("http://localhost:8080/getdata", finalData)
      .then((res) => {
        console.log("success", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <label> In which State do you live? </label>
      <select onClick={(e) => handleCoutrychange(e)}>
        {country.map((element, index) => {
          return <option key={index}>{element}</option>;
        })}
      </select>
      <br />
      <label> In which country do you live? </label>
      <select onClick={(e) => handleCityChange(e)}>
        {cities.map((element, index) => {
          return <option key={index}>{element}</option>;
        })}
      </select>
      <br />
      <label> Your interests?</label>
      <select onClick={(e) => handleinterestChange(e)}>
        {myInterest.map((element, index) => {
          return <option key={index}>{element}</option>;
        })}
      </select>
      <div>
        <button onClick={handleClick}>Submit data</button>
      </div>
    </div>
  );
}

export default Step3;
