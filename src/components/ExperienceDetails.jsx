export default function ExperienceDetails({ companyName, positionTitle, expStartDate, expEndDate, expLocation, description, onChange }){
    return (
        <div className = "experience-details">
        <h2 className = "experience-title">Experience</h2>
        <form className = "experience-form">
          <div className="input-group">
            <input
              type="text"
              id="company-name"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={onChange}
              data-key="companyName"
            />
            <input
              type="text"
              id="postion-title"
              placeholder="Enter Position Title"
              value={positionTitle}
              onChange={onChange}
              data-key="positionTitle"
            />
            <div className="dates-group">
              <input
                type="text"
                id="date"
                placeholder="Enter Start Date"
                value={expStartDate}
                onChange={onChange}
                data-key="startDate"
              />
              <input
                type="text"
                id="date"
                placeholder="Enter End Date"
                value={expEndDate}
                onChange={onChange}
                data-key="endDate"
              />
            </div>
              <input
                type="text"
                id="location"
                placeholder="Enter Location"
                value={expLocation}
                onChange={onChange}
                data-key="location"
                //optional
              />
              <input
                type="textarea"
                id="description"
                placeholder="Enter Description"
                value={description}
                onChange={onChange}
                data-key="description"
                //optional
              />
          </div>
        </form>
      </div>
    )
}