import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationInfoForm from './components/EducationInfoForm'

function App() {
  const [personalInfo, setPersonalInfo]=useState([{
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
  }]);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  return (
    <div>
      <PersonalInfoForm
        data={personalInfo}
        onChange={(updatedInfo) => setPersonalInfo(updatedInfo)}
      />

      <EducationInfoForm
        data={education}
        onChange = {(updatedInfo) => setEducation(updatedInfo)}
      />

      <h3>Live Personal Info</h3>
      <pre>{JSON.stringify(personalInfo, null, 2)}</pre>

      <h3>Live Education</h3>
      <pre>{JSON.stringify(education, null, 2)}</pre>
    </div>
  )
}

export default App;
