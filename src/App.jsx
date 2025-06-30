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

  const [experienceInfo, setExperienceInfo]=useState({
    companyName:"",
    positionTitle:"",
    startDate:"",
    endDate:"",
    location:"",
    description:"",
  })

  function handlePersonalDetailsChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key] : e.target.value})
  }

  function handleEducationChange(e){
    const { key } = e.target.dataset;
    setEducationInfo({...educationInfo, [key] : e.target.value})
  }

  function handleExperienceChange(e){
    const { key } = e.target.dataset;
    setExperienceInfo({...experienceInfo, [key] : e.target.value})
  }

  function loadSample(){
    setPersonalInfo({fullName: "Joshua De Jesus",
      email: "joshuadejesus12345@gmail.com",
      phoneNumber: "09054575529",
      address: "San Mateo, Rizal",})
    setEducationInfo({
      schoolName:"Mapua University",
      degree:"BS Electronics Engineer",
      startDate:"July 2013",
      endDate:"March 2020",
      location:"Muralla St. Intramuros, Manila",
    })
    setExperienceInfo({
      companyName:"MEC Networks Corporation",
      positionTitle:"Systems Engineer II",
      startDate:"April 2022",
      endDate:"September 2024",
      location:"Cubao, Quezon City",
      description:"Pre-sales engineer responsible for Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ligula diam. Praesent non porttitor libero, egestas tincidunt augue. ",
    })
  }

  function clearSample(){
    setPersonalInfo({fullName: "----------------",
      email: "-----------------",
      phoneNumber: "-----------",
      address: "-----------------",})
    setEducationInfo({
      schoolName:"------------------",
      degree:"---------------------------",
      startDate:"---------------------",
      endDate:"------------------",
      location:"------------------",
    })
    setExperienceInfo({
      companyName:"---------------",
      positionTitle:"--------------",
      startDate:"--------------",
      endDate:"-----------------",
      location:"-----------------------------",
      description:"--------------------------",
    })
  }

  console.log(educationInfo);

  return (
    <div className = "app">
      <div className = "edit-side">
        <div className = "sidebar">
          <button
          onClick={loadSample}>Load Sample</button>
          <button
          onClick={clearSample}>Clear Sample</button>
        </div>
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
          <ExperienceDetails 
          companyName={experienceInfo.companyName}
          positionTitle={experienceInfo.positionTitle}
          expStartDate={experienceInfo.startDate}
          expEndDate={experienceInfo.endDate}
          expLocation={experienceInfo.location}
          description={experienceInfo.description}
          onChange={handleExperienceChange}
          />
        </div>
      </div>
        <Resume 
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
        address={personalInfo.address}
        startDate={educationInfo.startDate} 
        endDate={educationInfo.endDate} 
        location={educationInfo.location} 
        schoolName={educationInfo.schoolName} 
        degree={educationInfo.degree}
        companyName={experienceInfo.companyName}
        positionTitle={experienceInfo.positionTitle}
        expStartDate={experienceInfo.startDate}
        expEndDate={experienceInfo.endDate}
        expLocation={experienceInfo.location}
        description={experienceInfo.description}
        />
        
    </div>
  )
}

export default App;

