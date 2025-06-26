import { useState } from 'react'
import './App.css'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationInfoForm from './components/EducationInfoForm'
import ExperienceForm from './components/ExperienceInfoForm'
import CVPreview from "./components/CVPreview";

function App() {
  const [personalInfo, setPersonalInfo]=useState({
    fullName: "Joshua De Jesus",
    email: "joshuadejesus12345@gmail.com",
    phone: "+639054575529",
    address: "San Mateo, Rizal",
    linkedin: "https://linkedin.com/joshuadejesus12345",
    github: "https://github.com/fopuy",
  });

  const [education, setEducation] = useState([
    {
      school: "Mapua University",
      degree: "BS Electronics Engineer",
      startDate: "July 2013",
      endDate: "March 2020",
      description: "",
    },
  ]);
  
  const [experience, setExperience] = useState([
    {
      company: "MEC Networks Corporation",
      position: "Systems Engineer II",
      startDate: "April 2022",
      endDate: "September 2024",
      description: "Pre-sales Engineer",
    }
  ])

  return (
    <div className = "app-container">
      <div className = "form-panel">
        <PersonalInfoForm
          data={personalInfo}
          onChange={(updatedInfo) => setPersonalInfo(updatedInfo)}
        />

        <EducationInfoForm
          data={education}
          onChange = {(updatedInfo) => setEducation(updatedInfo)}
        />

        <ExperienceForm
          data = {experience}
          onChange = {(updatedInfo) => setExperience(updatedInfo)}
        />
      </div>
      <div className = "preview-panel">
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
      </div>

      {/* <h3>Live Personal Info</h3>
      <pre>{JSON.stringify(personalInfo, null, 2)}</pre>

      <h3>Live Education</h3>
      <pre>{JSON.stringify(education, null, 2)}</pre>

      <h3>Live Experience</h3>
      <pre>{JSON.stringify(experience, null, 2)}</pre> */}
    </div>
  )
}

export default App;
