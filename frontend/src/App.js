
// MERN stack questions:

// Question:
// We require you to show a questionnaire (set of questions) in step form
// based on in. Question list is as follows:
// Step 1 -
// Question 1: What is your name?

// Step 2 -
// Question 2: Upload your photo? (user can select which part of image is
// to show from one file - r00000esizable)
// Question 3: Date of birth?

// Step 3 -
// Question 4: In which State do you live? (dropdown)
// Question 5: In which country do you live? (dependent dropdown as per
// state field)
// Question 6: Your interests? (Multi select dropdown)


// At the bottom of the page need to show the current no. of question and
// total eg. 1/6. and must have a previous button to see pre fill options.


// You need to use Redux for storage until the questionnaire is completed
// and on the last step submission it should store data in the database.



// What are the steps involved in implementing this feature?
// - Add the necessary validation in the fields

// - Use the necessary field types as good practice

// Technology: MERN stack


import './App.css';
import Step1 from './components/Step1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />}></Route>
        <Route path="/step2" element={<Step2 />}></Route>
        <Route path="/step3" element={<Step3 />}></Route>
      </Routes>
    </BrowserRouter> 
  );
 
}

export default App;
