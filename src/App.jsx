import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import Resume from './components/Resume';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  })
  
  const [educationInfo, setEducationInfo] = useState({
    schoolName:"",
    degree:"",
    startDate:"",
    endDate:"",
    location:"",
  })

  function handlePersonalDetailsChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key] : e.target.value})
  }

  function handleEducationChange(e){
    const { key } = e.target.dataset;
    setEducationInfo({...educationInfo, [key] : e.target.value})
  }

  console.log(educationInfo);

  return (
    <div className = "app">
      <div className = "edit-side">
        <div className = "sidebar"></div>
        <div className = "form-container">
          <PersonalDetails 
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
          onChange={handlePersonalDetailsChange}
          />
          <EducationDetails 
          schoolName={educationInfo.schoolName}
          degree={educationInfo.degree}
          startDate ={educationInfo.startDate}
          endDate ={educationInfo.endDate}
          location ={educationInfo.location}
          onChange ={handleEducationChange}
          />
          <ExperienceDetails />
        </div>
      </div>
        <Resume 
        fullName={personalInfo.fullName}/>
    </div>
  )
}

export default App;

