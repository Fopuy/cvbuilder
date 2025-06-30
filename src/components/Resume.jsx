export default function Resume({expStartDate, expEndDate, expLocation, companyName, positionTitle, description, startDate, endDate, location, schoolName, degree, fullName, email, phoneNumber, address}){
    return (
    <div className = "resume-container">
        <div className="resume top">
            <div className = "resume-layout">
                <div className = "personal-info">
                    <h1 className = "resume-name"> {fullName}</h1>
                    <div className = "contact-info">
                        {email && (
                            <div>
                                <i className="fa-solid fa-envelope" />
                                <span>{email}</span>
                            </div>
                        )}

                        {phoneNumber && (
                            <div>
                                <i className="fa-solid fa-phone" />
                                <span>{phoneNumber}</span>
                            </div>
                        )}

                        {address && (
                            <div>
                                <i className="fa-solid fa-location-dot" />
                                <span>{address}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="education-info">
                    <div className="education-info-group">
                        <p className="dates">
                        {startDate}
                        {startDate && endDate && <span> – </span>}
                        {endDate}
                        </p>
                        <p>{location}</p>
                    </div>

                    <div className="education-info-group">
                        <p className="education-info-schoolName">{schoolName}</p>
                        <p className="education-info-degree">{degree}</p>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="experience-info-group">
                        <p className="dates">
                        {expStartDate}
                        {expStartDate && expEndDate && <span> – </span>}
                        {expEndDate}
                        </p>
                        <p>{expLocation}</p>
                    </div>

                    <div className="experience-info-group">
                        <p className="experience-info-companyName">{companyName}</p>
                        <p className="experience-info-positionTitle">{positionTitle}</p>
                        <p className="experience-info-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
