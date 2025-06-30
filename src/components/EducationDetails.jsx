export default function EducationDetails({schoolName, degree, startDate, endDate, location, onChange}){
    return (
        <div className = "education-details">
        <h2 className = "education-title">Education</h2>
        <form className = "education-form">
          <input
            type="text"
            id="school-name"
            placeholder="Enter School/University"
            value={schoolName}
            onChange={onChange}
            data-key="schoolName"
          />
          <input
            type="text"
            id="degree"
            placeholder="Enter Degree/Field of Study"
            value={degree}
            onChange = {onChange}
            data-key="degree"
          />
          <div className = 'dates-group'>
            <input
              type="text"
              id="date"
              placeholder="Enter Start Date"
              value={startDate}
              onChange = {onChange}
              data-key = "startDate"
            />
            <input
              type="text"
              id="date"
              placeholder="Enter End Date"
              value={endDate}
              onChange = {onChange}
              data-key = "endDate"
            />
          </div>
          <input
              type="text"
              id="location"
              placeholder="Enter Location"
              value={location}
              onChange = {onChange}
              data-key = "location"
            />
        </form>
      </div>
    )
}