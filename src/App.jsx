import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfoForm from './components/PersonalInfoForm'

function App() {
  const [personalInfo, setPersonalInfo]=useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
  });
  return (
    <div>
      <PersonalInfoForm
        data={personalInfo}
        onChange={(updatedInfo) => setPersonalInfo(updatedInfo)}
      />

      <pre>{JSON.stringify(personalInfo, null, 2)}</pre>
    </div>
  )
}

export default App
