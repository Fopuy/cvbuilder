import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

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
                                <FaEnvelope />
                                <span>{email}</span>
                            </div>
                        )}

                        {phoneNumber && (
                            <div>
                                <FaPhone />
                                <span>{phoneNumber}</span>
                            </div>
                        )}

                        {address && (
                            <div>
                                <FaLocationDot />
                                <span>{address}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="education-info">
                    <div className="resume-section">
                        <h3 className = "header-text">Education</h3>
                        <div className="two-column-row">
                            <div className="left-col">
                                <div className="education-info-group">
                                    <p className="dates">
                                    {startDate}
                                    {startDate && endDate && <span> – </span>}
                                    {endDate}
                                    </p>
                                    <p>{location}</p>
                                </div>
                            </div>
                        
                        <div className="right-col">
                            <div className="education-info-group">
                                <p className="education-info-schoolName">{schoolName}</p>
                                <p className="education-info-degree">{degree}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="resume-section">
                        <h3 className="header-text">Professional Experience</h3>
                        <div className="experience-info-group">
                            <div className="two-column-row">
                                    <div className="left-col">
                                        <p className="dates">
                                        {expStartDate}
                                        {expStartDate && expEndDate && <span> – </span>}
                                        {expEndDate}
                                        </p>
                                        <p>{expLocation}</p>
                                    </div>
                                <dev className="right-col">
                                    <div className="experience-info-group">
                                        <p className="experience-info-companyName">{companyName}</p>
                                        <p className="experience-info-positionTitle">{positionTitle}</p>
                                        <p className="experience-info-description">{description}</p>
                                    </div>
                                </dev>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
